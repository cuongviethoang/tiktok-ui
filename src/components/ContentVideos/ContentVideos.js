import classNames from 'classnames/bind';
import styles from './ContentVideos.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faCommentDots,
    faHeart,
    faShare,
} from '@fortawesome/free-solid-svg-icons';

import VideoItem from './VideoItem';
import videos from '~/assets/videos';

const cx = classNames.bind(styles);

const MENU_INFO_VIDEO = [
    {
        id: 1,
        src: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/9221a868bf2b64043075c7fc15f62085~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=HkH8nfvDDatzl8cOyvenDtrHk8g%3D',
        nickName: '.lilian.aa',
        fullName: 'lilla👀💭',
        content: 'chỗ này ghi nội dung',
        linkTag: [
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
        ],
        linkSong: 'som origin',
        video: `${videos.video}`,
        numLikes: '114.4k',
        numComment: '278',
        numSaveStore: '3226',
        numShareVideo: '90',
        followed: 'true',
        interacts: [
            {
                id: 1,
                icon: <FontAwesomeIcon icon={faHeart} />,
                num: '78.3k',
            },
            {
                id: 2,
                icon: <FontAwesomeIcon icon={faCommentDots} />,
                num: '820',
            },
            {
                id: 3,
                icon: <FontAwesomeIcon icon={faBookmark} />,
                num: '6093',
            },
            {
                id: 4,
                icon: <FontAwesomeIcon icon={faShare} />,
                num: '113',
            },
        ],
    },
    {
        id: 2,
        src: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/9221a868bf2b64043075c7fc15f62085~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=HkH8nfvDDatzl8cOyvenDtrHk8g%3D',
        nickName: '.lilian.aa',
        fullName: 'lilla👀💭',
        content: 'chỗ này ghi nội dung',
        linkTag: [
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
        ],
        linkSong: 'som origin',
        video: `${videos.video}`,
        numLikes: '114.4k',
        numComment: '278',
        numSaveStore: '3226',
        numShareVideo: '90',
        followed: 'true',
        interacts: [
            {
                id: 1,
                icon: <FontAwesomeIcon icon={faHeart} />,
                num: '78.3k',
            },
            {
                id: 2,
                icon: <FontAwesomeIcon icon={faCommentDots} />,
                num: '820',
            },
            {
                id: 3,
                icon: <FontAwesomeIcon icon={faBookmark} />,
                num: '6093',
            },
            {
                id: 4,
                icon: <FontAwesomeIcon icon={faShare} />,
                num: '113',
            },
        ],
    },
    {
        id: 3,
        src: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/9221a868bf2b64043075c7fc15f62085~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=HkH8nfvDDatzl8cOyvenDtrHk8g%3D',
        nickName: '.lilian.aa',
        fullName: 'lilla👀💭',
        content: 'chỗ này ghi nội dung',
        linkTag: [
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
            {
                tag: '#CapCut',
            },
            {
                tag: '#fyp',
            },
            {
                tag: '#ic',
            },
        ],
        linkSong: 'som origin',
        video: `${videos.video}`,
        numLikes: '114.4k',
        numComment: '278',
        numSaveStore: '3226',
        numShareVideo: '90',
        followed: 'true',
        interacts: [
            {
                id: 1,
                icon: <FontAwesomeIcon icon={faHeart} />,
                num: '78.3k',
            },
            {
                id: 2,
                icon: <FontAwesomeIcon icon={faCommentDots} />,
                num: '820',
            },
            {
                id: 3,
                icon: <FontAwesomeIcon icon={faBookmark} />,
                num: '6093',
            },
            {
                id: 4,
                icon: <FontAwesomeIcon icon={faShare} />,
                num: '113',
            },
        ],
    },
];

function ContentVideos() {
    const [contentVideos, setContentVideos] = useState([...MENU_INFO_VIDEO]);

    return (
        <div className={cx('wrapper')}>
            {contentVideos.map((content, index) => (
                <VideoItem data={content} key={index} />
            ))}
        </div>
    );
}

export default ContentVideos;
