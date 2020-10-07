const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const mySql   = require('mysql2/promise');
const config  = require('../../config/db');
const { check , validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


//@route POST /api/user/register
//@desc Register User
//@access PUBLIC

router.post(
    '/',
    [
        check('name','Name is required').not().isEmpty(),
        check('username','Username is required').not().isEmpty(),
        check('password','Please enter a password with 6 or more charachters.').isLength({min : 6})  
    ], 
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({ errors : errors.array()});
        const { name , username , password } = req.body;
        let db;
        try{
            const readQuery = 'SELECT count(*) FROM USERS where USERNAME = ?';
            db = await mySql.createConnection(config);
            const results = await db.query(readQuery,[username]);
            const count = results[0][0][Object.keys(results[0][0])[0]];
            if( count > 0 ) return res.status(400).json({ msg : "User Already Exists"});
            const salt = await bcrypt.genSalt(10);
            const encPassword = await bcrypt.hash(password,salt);
            const query = 'INSERT into USERS SET ?';
            const values = {
                USERNAME : username,
                NAME : name,
                PASSWORD : encPassword
            };
            const userAdded = await db.query(query,values);
            const payload = { user : username };
            const accessToken = jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '5 days' });
            res.status(200).json({
                accessToken : accessToken
            });
        }
        catch(err){
            console.log("Error => ",err);
            return res.status(500).json({
                msg : "Server Error"
            });
        }
        finally{
            await db.end();
        }
    });

    module.exports = router;