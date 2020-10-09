import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import '../styles/comment_list.scss';

import { closeCommentsList } from '../actions/posts';

const CommentList = props => {
    const commentListElement = props.commentsData.map((data,ind) => {
        return(
            <li key={'clist'+ind} className={'isht-comment-list-item'}>
                <div className={'isht-comment-list-item-pp-wrap'}>
                        <img alt='profile pic' src='https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ' className={'isht-comment-list-item-pp'}/>
                </div>
                <div className={'isht-comment-list-item-cmnt-wrap'}>
                    <div>
                        <span className={'isht-comment-list-user-detail'}>
                            {data.USERNAME}
                        </span>
                        <span className={'isht-comment-list-text'}>
                            {data.COMMENT_TEXT}
                        </span>
                    </div>
                    <div className={'isht-comment-list-item-footer'}>
                        <span className={'isht-ts-cont'}>
                            {moment(data.TS_COMMENT).fromNow()}
                        </span>
                        <span className={'isht-likes-cont'}>
                            {"0" + " likes"}
                        </span>
                    </div>
                </div>
            </li>
        );
    });

    const captionElement = (
        <div  className={'isht-comment-list-item'}>
            <div className={'isht-comment-list-item-pp-wrap'}>
                    <img alt='profile pic' src='https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ' className={'isht-comment-list-item-pp'}/>
            </div>
            <div className={'isht-comment-list-item-cmnt-wrap'}>
                <div>
                    <span className={'isht-comment-list-user-detail'}>
                        {props.selectedPost.username}
                    </span>
                    <span className={'isht-comment-list-text'}>
                        {props.selectedPost.caption}
                    </span>
                </div>
                <div className={'isht-comment-list-item-footer'}>
                    <span className={'isht-ts-cont'}>
                        {props.selectedPost.ts}
                    </span>
                </div>
            </div>
        </div>
    );

    return(
        <div className={'isht-comment-list-container-bg'}>
            <div className={'isht-comment-list-container'}>
            <div className={'isht-comment-list-header'}>
                <span className={'isht-comment-list-back-btn'} onClick={() => props.closeCommentsList()}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30pt" height="30pt" viewBox="0 0 200.000000 200.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M541 1195 c-89 -97 -161 -184 -161 -194 0 -10 73 -98 161 -195 125
                    -137 166 -176 183 -174 44 6 26 37 -103 181 -72 80 -131 148 -131 151 0 3 253
                    7 563 8 l562 3 0 25 0 25 -562 3 c-310 1 -563 5 -563 8 0 3 59 71 130 151 75
                    83 130 153 128 162 -2 9 -13 17 -25 19 -16 2 -57 -36 -182 -173z"/>
                    </g>
                    </svg>
                </span>
                <span className={'isht-comment-list-title'}>Comments</span>
            </div>
            <div className={'isht-comment-list-body'}>
                <div className={'isht-comment-list-cap-cont'}>
                   {captionElement}
                </div>
                <ul>
                    {commentListElement}     
                </ul>
            </div>
        </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        commentsData : state.postReducer.commentsData
    }
}

export default connect(mapStateToProps,{
    closeCommentsList
})(CommentList)