import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Post from './Post';
import CommentList from './CommentList';

import { likePost , unlikePost , postComment } from '../actions/posts';

import '../styles/posts_container.scss';


const PostsContainer = props => {
    const [selectedPost , setSelectedPost] = useState({});
    
    const handleLikeClick = (postId) => {
        const flag = props.likedByMe.includes(postId); 
        const updatedPostData = JSON.parse(JSON.stringify(props.postsData));
        if(flag){
            const updatedLikedByMe = props.likedByMe.filter(data => data !== postId);
            updatedPostData.forEach((data) => {
                if(data.POST_ID === postId) data.LIKES -= 1;
            });
            props.unlikePost(postId,updatedLikedByMe,updatedPostData);
        }
        else{
            let updatedLikedByMe = props.likedByMe.slice(0,props.likedByMe.length);
            updatedLikedByMe.push(postId);
            updatedPostData.forEach((data) => {
                if(data.POST_ID === postId) data.LIKES += 1;
            });
            props.likePost(postId,updatedLikedByMe,updatedPostData);
        }
    }

    const handlePostComment = (commentText,postId) => {
        const updatedPostData = JSON.parse(JSON.stringify(props.postsData));
        updatedPostData.forEach((data) => {
            if(data.POST_ID === postId) data.COMMENTS_COUNT += 1;
        });
        props.postComment(postId,commentText,updatedPostData);
    }

    const handleSelectPost = postId => {
        let tmp = {};
        props.postsData.forEach( data => {
            if(data.POST_ID === postId){
                tmp = {
                    username : data.USERNAME,
                    caption : data.CAPTION,
                    ts : moment(data.CREATED_AT).fromNow() 
                };
            }   
        });
        setSelectedPost(tmp);
    }

    const postListElement = props.postsData.map((data,ind) => <Post
        postId={data.POST_ID} 
        username={data.USERNAME}
        imageUrl={data.IMG_URL}
        caption={data.CAPTION}
        likes={data.LIKES}
        comments={data.COMMENTS_COUNT}
        createdAt={moment(data.CREATED_AT).fromNow()}
        isLiked={props.likedByMe.includes(data.POST_ID)}
        onLikeCLick={(postId) => handleLikeClick(postId)}
        onPostComment={(commentText,postId) => handlePostComment(commentText,postId)}
        onSelectPost={(postId) => handleSelectPost(postId)}
    />);

    const commentListModalElement = props.showCommentListModal ? <CommentList selectedPost={selectedPost}/> : '';

    return(
        <React.Fragment>
            {commentListModalElement}
            <div className={'isht-post-wrap'}>
                {postListElement}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        postsData : state.postReducer.postsData,
        likedByMe : state.postReducer.likedByMe,
        showCommentListModal : state.postReducer.showCommentListModal
    };
}

export default connect(mapStateToProps,{
    likePost,
    unlikePost,
    postComment
})(PostsContainer);