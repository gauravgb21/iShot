import React from 'react';

const PhotoGrid = props => {
    const imgUrls = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-uwhni8yV68oIavpxp2ic2kQlrp_XAxQqCg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7ucjh1RQi8t42xEGHCoaofVz6OAW65Iw3yQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwmpeECzCHq3aScWmQZXP2KIlxlOJkN64wHQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDuCTS-m-UEKs_tj5O6HUo4YE08_5QXLJzXw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD2gtQz_Y0En3nPxn4BmGWSKWoSHwkP3og2g&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFYl5hcG2rD2luXM8WVV4EUPwDkHZtt6REmw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKh6B2Pu-p7JPHcQgIfpC75uVZFG5FAL3a5w&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHJnB3K6NmaM0JeoE9Rp6gHb43-Xt1oLikbA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnDtXIcuYrlo5XkuVOzzBKwO9wWstzzgH3Og&usqp=CAU'
    ];
    const photGridElements = imgUrls.map((dataUrl,ind) => {
        return(
            <span className={'isht-photogrid-element'}>
                <img alt='photo grid image' src={dataUrl} width='100%' />
            </span>
        );
    });
    return(
        <div className={'isht-photogrid-cont'}>
            {photGridElements}
        </div>
    );
}

export default PhotoGrid;