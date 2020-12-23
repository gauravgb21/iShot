import React from 'react';

const ProfileDetails = props => {
    return(
        <div className={'isht-profile-user-details'}>
            <div className={'isht-profile-pic-cont'}>
              <img alt='profile pic' src='https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ' alt='profile picture'/>
            </div>
            <div className={'isht-user-info-cont'}>
                <div className={'isht-user-info-username'}>
                   <div className={'isht-username'}>{"gauravgb21"}</div>
                   <div className={'isht-edit-prof-btn'}>Edit Profile</div>
                </div>
                <div className={'isht-activity-details'}>
                    <span className={'isht-activity-value'}><span className={'isht-num'}>{'8'}</span><span className={'isht-text'}>{' posts'}</span></span>
                    <span className={'isht-activity-value'}><span className={'isht-num'}>{'82'}</span><span className={'isht-text'}>{' followers'}</span></span>
                    <span className={'isht-activity-value'}><span className={'isht-num'}>{'93'}</span><span className={'isht-text'}>{' following'}</span></span>
                </div>
                <div className={'isht-basic-user-info-cont'}>
                    <div className={'isht-user-info-name'}>{'Gaurav Bisht'}</div>
                    <div className={'isht-user-bio'}>{'Viscal El Barca'}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;