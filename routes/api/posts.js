const express = require('express');
const router  = express.Router();
const mySql   = require('mysql2/promise');
const config  = require('../../config/db');
const auth    = require('../../middlewares/auth');


//@route /api/posts/:id
//@desc Fetch all posts for a user
//@access Private

router.get('/', auth , async (req,res) => {
    const username = req.user;
    const query = 'SELECT POSTS.POST_ID , POSTS.IMG_URL , POSTS.CAPTION , POSTS.CREATED_AT , POSTS.USERNAME , LIKE_ACTIVITY.LIKES , COMMENT_ACTIVITY.COMMENTS_COUNT FROM POSTS INNER JOIN LIKE_ACTIVITY on POSTS.POST_ID = LIKE_ACTIVITY.ACTIVITY_ID INNER JOIN COMMENT_ACTIVITY ON LIKE_ACTIVITY.ACTIVITY_ID = COMMENT_ACTIVITY.POST_ID where USERNAME = ?';
    let db;
    if( username ){
        try{
            db = await mySql.createConnection(config);
            const postData = await db.query(query,[username]);
            console.log("POST DATA => ",postData[0]);
            return res.json({
                posts : postData[0]
            });
        }
        catch(err){
            console.log("Error Occured => ",err);
            return res.status(500).json({
                msg : "Server Error"
            });
        }
        finally{
            await db.end();
        }
    }
    else{
        return res.status(500).json({
            msg : "Username is not Defined"
        });
    }
});

//@route /api/posts
//@desc Create new post
//@access Private

router.post('/', auth , async (req,res) => {
    const {
        USERNAME = req.user,
        IMG_URL,
        CAPTION        
    } = req.body;
    const values = [USERNAME,IMG_URL,CAPTION];
    const query = 'INSERT INTO POSTS (USERNAME,IMG_URL,CAPTION) VALUES (?,?,?)';
    const insertQueryForLikeActivity = 'INSERT INTO LIKE_ACTIVITY (ACTIVITY_ID,TYPE,LIKES) VALUES (?,?,?)';
    const insertQueryForCommentActivity = 'INSERT INTO COMMENT_ACTIVITY (POST_ID,COMMENTS_COUNT) VALUES (?,?)';
    let db;
    try{
        db = await mySql.createConnection(config);
        const postData = await db.query(query,values);
        const likeActivityValues = [postData[0].insertId,'POST',0];
        const commentActivityValues = [postData[0].insertId,0];
        const likeActivityResponse = await db.query(insertQueryForLikeActivity,likeActivityValues);
        const commentActivityResponse = await db.query(insertQueryForCommentActivity,commentActivityValues); 
        return res.status(200).json({
            msg : "posted successfuly"
        });
    }
    catch(err){
        console.log("Error => ",err);
        res.status(500).json({
            msg : "Server Error"
        });
    }
    finally{
        await db.end();
    }
});

//@route /api/posts/like/:id
//@desc Like a post
//@access Private

router.put('/like/:id', auth , async (req,res) => {
    try{
        const username = req.user;
        const post_id = req.params.id;
        const readLikeActivityQuery = 'SELECT LIKES from LIKE_ACTIVITY where ACTIVITY_ID = ?';
        const db = await mySql.createConnection(config);
        const getTotalLikesResponse = await db.query(readLikeActivityQuery,[post_id]);
        console.log("Total Likes to this are => ",getTotalLikesResponse[0][0].LIKES);
        const updatedLikes = getTotalLikesResponse[0][0].LIKES + 1;
        const insertQueryForLikes = 'INSERT into LIKES (TYPE,ACTIVITY_ID,USERNAME) VALUES(?,?,?)';
        const updateQueryLikeActivity = 'UPDATE LIKE_ACTIVITY SET LIKES = ? where ACTIVITY_ID = ?';
        const valuesForLikeActivity = [updatedLikes,post_id];
        const valuesForLikes = ['POST',post_id,username];
        const likesResponse = await db.query(insertQueryForLikes,valuesForLikes);
        const likeActivityResponse = await db.query(updateQueryLikeActivity,valuesForLikeActivity);
        res.status(200).json({
            msg : "Likes Updated Successfully"
        });
    }
    catch(err){
        console.log("Error is => ",err);
        res.send(500).json({
            msg : "Internal Server Error !"
        });
    }
});

module.exports = router;

