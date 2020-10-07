import React , { useRef, useState, useLayoutEffect , useEffect } from 'react';
import { connect } from 'react-redux';

import PostsContainer from './PostsContainer';
import StaticSideBox from './StaticSideBox';
import CreatePostModal from './modals/CreatePostModal';

import '../styles/home.scss';

import { fetchPosts } from '../actions/posts';
 
const Home = props => {
    const homeSectionRef = useRef(null);
    const [sectionWidth,setSectionWidth] = useState(0);
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        props.fetchPosts();
    },[]);
    
    useLayoutEffect(() => {
        if(homeSectionRef.current)setSectionWidth(homeSectionRef.current.clientWidth);
        window.addEventListener('resize',() => {
            // console.log("yo chngin ",window.innerWidth);
            setWindowWidth(window.innerWidth);
            setSectionWidth(homeSectionRef.current.clientWidth);
        });

        return () => window.removeEventListener('resize',() => setSectionWidth(homeSectionRef.current.clientWidth));
    },[homeSectionRef]);

    console.log("show modal is => ",props.showCreatePostModal);
    const createPostModalElement = props.showCreatePostModal ? <CreatePostModal /> : '';

    return(
        <React.Fragment>
            {createPostModalElement}
            <section className={'isht-home-wrap'} ref={homeSectionRef}>
                <PostsContainer />
                {
                    (windowWidth > 1000) && (
                        <StaticSideBox sectionWidth={sectionWidth} windowWidth={windowWidth}/>
                    )
                }
            </section>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
        showCreatePostModal : state.postReducer.showCreatePostModal
    };
};

export default connect(mapStateToProps,{
    fetchPosts
})(Home);