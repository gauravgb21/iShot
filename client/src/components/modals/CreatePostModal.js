import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { closeCreatePostModal , createNewPost } from '../../actions/posts';

import '../../styles/modals/create_post_modal.scss';

const CreatePostModal = props => {
    const captionRef = useRef(null);
    
    const handlePostSubmit = () => {
        const captionValue = captionRef.current.value;
        const payload = {
            IMG_URL : props.postImageUrl,
            CAPTION : captionValue
        };
        props.createNewPost(payload);
    }

    return(
        <div className={'isht-create-post-modal-bg'}>
            <div className={'isht-create-post-modal'}>
                <div className={'isht-create-post-modal-header'}>
                    <span className={'close-button'} onClick={() => props.closeCreatePostModal()}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="16.5pt" height="16.5pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M2290 5109 c-484 -52 -954 -247 -1340 -555 -105 -84 -294 -272 -380
                            -378 -266 -330 -459 -750 -534 -1166 -55 -308 -48 -686 19 -997 56 -257 187
                            -583 325 -803 180 -289 439 -562 715 -755 313 -218 651 -355 1050 -426 151
                            -27 528 -38 686 -20 502 57 931 234 1334 549 90 71 326 306 397 397 283 360
                            453 742 529 1189 27 156 37 511 19 682 -88 873 -631 1647 -1425 2034 -243 119
                            -484 195 -745 235 -124 20 -523 28 -650 14z m588 -274 c773 -116 1416 -587
                            1754 -1283 312 -645 300 -1416 -32 -2050 -439 -837 -1335 -1323 -2266 -1231
                            -542 53 -1035 294 -1424 696 -349 359 -555 788 -631 1308 -20 134 -17 454 5
                            600 60 397 208 752 448 1073 93 124 316 347 438 438 359 268 742 417 1190 464
                            116 12 393 4 518 -15z"/>
                            <path d="M1478 3684 c-37 -20 -58 -63 -58 -121 l0 -48 477 -477 478 -478 -478
                            -478 -477 -477 0 -57 c0 -67 29 -109 87 -129 80 -26 76 -29 585 479 l468 467
                            467 -467 c510 -508 506 -505 586 -479 69 23 109 99 88 163 -8 23 -155 177
                            -481 503 l-470 470 469 470 c514 514 507 506 479 590 -18 54 -65 85 -132 85
                            l-51 0 -477 -477 -478 -478 -478 478 -477 477 -50 0 c-28 -1 -62 -7 -77 -16z"/>
                            </g>
                        </svg>
                    </span>
                    <span className={'title'}>New Post</span>
                    <span className={'post-button'} onClick={() => handlePostSubmit()}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="16.5pt" height="16.5pt" viewBox="0 0 225.000000 225.000000"
                        preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                            fill="#0095f6" stroke="none">
                            <path d="M1475 2105 c-25 -24 -25 -27 -25 -198 l0 -174 -257 -6 c-144 -4 -304
                            -13 -363 -22 -207 -30 -372 -85 -492 -164 -200 -131 -298 -304 -327 -573 -15
                            -132 -14 -190 4 -294 30 -172 167 -526 211 -546 48 -22 52 -5 47 190 -4 153
                            -2 191 16 277 28 137 74 227 154 301 153 143 314 183 762 187 l240 2 6 -185
                            c3 -102 6 -186 7 -187 12 -15 67 -32 85 -28 13 4 177 160 365 349 295 294 342
                            346 342 371 0 26 -48 78 -348 377 -377 377 -375 376 -427 323z"/>
                            </g>
                        </svg>
                    </span>
                </div>
                <div className={'isht-create-post-modal-body'}>
                    <textarea placeholder={'Write a caption...'} ref={captionRef}/>
                    <img alt='post-image' src={props.postImageUrl} width='100%' />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        postImageUrl : state.postReducer.postImageUrl
    };
}

export default connect(mapStateToProps,{
    closeCreatePostModal,
    createNewPost
})(CreatePostModal);