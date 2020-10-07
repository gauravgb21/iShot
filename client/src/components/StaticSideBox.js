import React , { useEffect , useLayoutEffect, useRef } from 'react';
import '../styles/static_side_box.scss';

const StaticSideBox = props => {

    const staticContainerRef = useRef(null);

    useLayoutEffect(() => {
        if(staticContainerRef.current){
            const extraWidth = (props.windowWidth - props.sectionWidth)/2;
            staticContainerRef.current.style.left = (630 + extraWidth + 12) + 'px';
        }
    },[props.sectionWidth,staticContainerRef,window.innerWidth,props.windowWidth]);

    return(
        <div className={'isht-static-sb'} ref={staticContainerRef}>
            {/* <div className={'isht-create-post'}>Create</div> */}
            <div className={'isht-static-profile-cont'}>
                <span>
                  <img alt='profile pic' src='https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ' className={'isht-static-pp-img'} />
                </span>
                <div className={'isht-user-info-cont'}>
                   <div className={'isht-username'}>{'gauravgb21'}</div>
                   <div className={'isht-user-name'}>{'Gaurav Bisht'}</div>
                </div>
            </div>
            <div className={'isht-help-section-cont'}>
                <span>About</span>
                <span>Help</span>
                <span>Press</span>
                <span>API</span>
                <span>Privacy</span>
                <span>Terms</span>
                <span>Locations</span>
                <span>Top Accounts</span>
                <span>Hashtags</span>
                <span>Language</span>
            </div>
            <div className={'isht-copyright-info'}>
               &#169; iShot 2020
            </div>
        </div>
    );
}

export default StaticSideBox;