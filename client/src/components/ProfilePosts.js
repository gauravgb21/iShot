import React , { useState } from 'react';

import ProfilePostsNavBar from './ProfilePostsNavBar';
import PhotoGrid from './PhotoGrid';
import SavedPosts from './SavedPosts';
import TaggedPosts from './TaggedPosts';

const ProfilePosts = props => {
    const [clickedBtn,setClickedBtn] = useState('POSTS');
    const profilePostsElement = clickedBtn === 'POSTS' ? <PhotoGrid /> : ( clickedBtn === 'SAVED' ? <SavedPosts /> : <TaggedPosts /> );
    return(
        <div className={'isht-profile-posts-cont'}>
            <ProfilePostsNavBar clickedBtn={clickedBtn} onNavChange={(data) => setClickedBtn(data)}/>
            {profilePostsElement}
        </div>
    );
}

export default ProfilePosts;