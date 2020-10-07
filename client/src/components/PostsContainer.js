import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Post from './Post';

import '../styles/posts_container.scss';

const PostsContainer = props => {
    const postListElement = props.postsData.map((data,ind) => <Post username={data.USERNAME} imageUrl={data.IMG_URL} caption={data.CAPTION} likes={data.LIKES} comments={data.COMMENTS_COUNT} createdAt={moment(data.CREATED_AT).fromNow()} />)
    return(
        <div className={'isht-post-wrap'}>
            {postListElement}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        postsData : state.postReducer.postsData
    };
}

export default connect(mapStateToProps,{})(PostsContainer);