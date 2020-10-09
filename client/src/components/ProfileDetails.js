import React from 'react';

const ProfileDetails = props => {
    return(
        <div className={'isht-profile-user-details'}>
            <div className={'isht-profile-pic-cont'}>
              <img alt='profile pic' src='https://instagram.fdel1-4.fna.fbcdn.net/v/t51.2885-19/s150x150/117171619_729277130966509_8911769517656992152_n.jpg?_nc_ht=instagram.fdel1-4.fna.fbcdn.net&_nc_ohc=h-Xirz3fQBAAX8CQ6DY&oh=9b94f5781f2554ff51ce6bd80d5f29de&oe=5FA7BD7B'/>
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
                    <div className={'isht-user-bio'}>{'Viscal El Barca \n Bitch be humble'}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;