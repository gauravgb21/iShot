import React from 'react';

import ProfileDetails from './ProfileDetails';
import ProfilePosts from './ProfilePosts';

import '../styles/profile.scss';

const Profile = props => {
    return(
        <section className={'isht-profile-wrap'}>
            <ProfileDetails />
            <ProfilePosts />
        </section>
    );
}

export default Profile;