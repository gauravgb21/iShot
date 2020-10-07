const express = require('express');
const router  = express.Router();
const auth    = require('../../middlewares/auth');
const bcrypt  = require('bcryptjs');
const mySql   = require('mysql2/promise');
const config  = require('../../config/db');
const { check , validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


//@route GET /api/user/login
//@desc  User data 
//@access PUBLIC

router.get('/', auth , async (req,res) => {
    const username = req.user;
    const query = 'select * from users where username = ?';
    let db;
    try {
        db = await mySql.createConnection(config);
        const userData = await db.query(query,[username]);
        res.json({
            username : userData[0][0].USERNAME,
            name : userData[0][0].NAME,
            userBio : userData[0][0].BIO
        });
    }
    catch(err) {
        res.status(500).json({
            msg : "Server Error"
        });
    }
});



//@route POST /api/user/login
//@desc Login User
//@access PUBLIC

router.post(
    '/',
    [
        check('username','Username is required').not().isEmpty(),
        check('password','Password is required').not().isEmpty()  
    ], 
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({ errors : errors.array()});
        const { username , password } = req.body;
        let db;
        try{
            const readQuery = 'SELECT * FROM USERS where USERNAME = ?';
            db = await mySql.createConnection(config);
            const results = await db.query(readQuery,[username]);
            const encPassword = results[0][0]['PASSWORD'];
            if( results.length === 0 ) return res.status(400).json({ msg : "User Doesn't Exist"});
            const isMatch = await bcrypt.compare(password,encPassword);
            if(!isMatch) return res.status(400).json({ msg : "Invalid Credentials"});
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