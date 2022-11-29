import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Hot Hits VietNam',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/3/0/6/33067f778d68e2b8aece078f4e079665.jpg'
        },
        {
            id: 2,
            name: 'Nhạc mới mỗi ngày',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/c/5/9/2c59d558a4630270b0c133d3e8416b28.jpg'
        },
        {
            id: 3,
            name: 'Nhạc cho thứ hai',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/4/9/c/049c4d6ac8897764a93d52ac7cef4768.jpg'
        },
    ]

    return (
        <div>
            <h2>Có lẽ bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;