import React from 'react';
import { connect } from 'react-redux';

import '../styles/photogrid.scss';

const PhotoGrid = props => {
    let photoCellList = [];
    let postDataList = [];
    props.postsData.forEach((data,ind) => {
        const photoCellElement = (
            <div className={'isht-photo-cell'}>
                <img alt='photo post' src={data.IMG_URL} />
            </div>
        );
        photoCellList.push(photoCellElement);
        if( ind % 3 === 2 || ind === props.postsData.length -1 ){
            postDataList.push(
                <div className={'isht-photo-grid-row'}>
                    {photoCellList}
                </div>
            );
            photoCellList = [];
        }
        console.log("photocelllist is => ",photoCellList);
    });
    console.log("postDataList ======> ",postDataList);
    return(
        <div className={'isht-photogrid-container'}>
            {postDataList}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        postsData : state.postReducer.postsData
    };
}

export default connect(mapStateToProps)(PhotoGrid);