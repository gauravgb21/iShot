import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import '../styles/isht_icons.scss';

import AccountOptions from './modals/AccountOptions';

import { changeRoute } from '../actions/navigation_actions';

const Navbar = props => {
    const [showAccountOptions,setShowAccountOptions] = useState(false);
    const inputFileRef = useRef(null);

    const homeIcon = props.selectedRoute === 'home' ? (<svg aria-label="Home" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>)
     : (<svg aria-label="Home" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>);
    const directIcon = props.selectedRoute === 'direct' ? ( <svg aria-label="Direct" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"></path></svg>)
    : (<svg aria-label="Direct" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>);
    const accountOptionsElement = showAccountOptions ? <AccountOptions onClose={() => setShowAccountOptions(!showAccountOptions)}/> : '';

    const handleFileUpload = (e) => {
        console.log("With event is => ",e.target.files[0]);
        props.onImageUpload(e.target.files[0]);
    }
    
     return(
         <React.Fragment>
             {accountOptionsElement}
            <div className={'isht-nav-wrap'}>
                <nav className={'isht-navbar-cont'}>
                    <span className={'isht-app-icon'}>iShot</span>
                    <Link to={'/direct'} className={'isht-direct-icon-ls'}>
                        <span onClick={() => props.changeRoute('direct')}>
                        {directIcon}
                        </span>
                    </Link>
                    <div className={'isht-nav-icons'}>
                    <Link to={'/'}>
                        <span onClick={() => props.changeRoute('home')}>
                            {homeIcon}
                        </span>
                    </Link>
                    <span className={'isht-search-icon'}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="16.5pt" height="16.5pt" viewBox="0 0 225.000000 225.000000"
                        preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M760 2191 c-497 -109 -805 -600 -680 -1086 81 -317 320 -554 646
                            -641 106 -28 323 -26 429 4 101 29 224 88 302 145 l60 45 309 -309 c170 -170
                            317 -312 326 -315 18 -5 58 11 70 30 26 39 11 58 -303 372 l-311 312 42 53
                            c156 197 212 490 145 749 -80 306 -323 550 -630 631 -115 30 -293 35 -405 10z
                            m355 -136 c224 -59 397 -197 495 -399 31 -63 55 -130 65 -178 69 -349 -107
                            -692 -431 -839 -97 -44 -185 -62 -304 -62 -119 0 -207 18 -304 62 -261 118
                            -428 364 -443 651 -11 217 61 401 217 561 118 119 269 196 435 219 72 10 201
                            3 270 -15z"/>
                            </g>
                        </svg>
                    </span>
                    <Link to={'/direct'} className={'isht-direct-icon-m'}>
                        <span onClick={() => props.changeRoute('direct')}>
                        {directIcon}
                        </span>
                    </Link>
                    <label className={'isht-add-post-icon'}>
                        <input type='file' ref={inputFileRef} onChange={(e) => handleFileUpload(e)}/>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16.5pt" height="16.5pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M948 2234 c-479 -74 -860 -459 -933 -941 -19 -124 -19 -212 0 -336
                            55 -362 282 -674 610 -837 557 -276 1230 -50 1505 505 221 446 127 971 -236
                            1315 -255 242 -597 349 -946 294z m266 -94 c244 -24 463 -126 631 -295 397
                            -396 397 -1043 0 -1440 -397 -397 -1044 -397 -1440 0 -397 397 -397 1044 0
                            1440 164 165 390 272 618 294 45 5 84 9 87 9 3 1 50 -3 104 -8z"></path>
                            <path d="M1086 1614 c-14 -13 -16 -48 -16 -225 l0 -209 -209 0 c-227 0 -241
                            -3 -241 -55 0 -52 14 -55 241 -55 l209 0 0 -209 c0 -227 3 -241 55 -241 52 0
                            55 14 55 241 l0 209 209 0 c227 0 241 3 241 55 0 52 -14 55 -241 55 l-209 0 0
                            209 c0 227 -3 241 -55 241 -13 0 -31 -7 -39 -16z"></path>
                            </g>
                        </svg>
                    </label>
                    <span>
                    <svg aria-label="Activity Feed" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    </span> 
                    <span onClick={() => setShowAccountOptions(!showAccountOptions)}>
                        <img alt='profile pic' src='https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ' className={'isht-pp-img'} />
                    </span>           
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedRoute : state.navigationReducer.selectedRoute
    };
}

export default connect(mapStateToProps,{
    changeRoute
})(Navbar);