import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faBell,
    faGear,
    faFileVideo,
    faVideo,
    faCircleDollarToSlot,
    faFileLines,
    faUser,
    faMoon,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
// Config routes
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Vietnamese',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // Giả định người dùng đã đăng nhập
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@user',
        },
        {
            icon: <FontAwesomeIcon icon={faFileLines} />,
            title: 'Yêu thích',
            to: '/loveLive',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
            title: 'Nhận xu',
            to: '/coin?enter_from=web_main_nav',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'Live studio',
            to: '/studio/download?enter_from=profile',
        },
        {
            icon: <FontAwesomeIcon icon={faFileVideo} />,
            title: 'Trung tâm Nhà sáng tạo LIVE',
            to: '/live/creators?enter_from=portrait&lang=vi-VN&region=VN',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/setting',
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Chế độ sáng tối',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true, // thuộc tính này để sử dụng border-top cho mỗi MenuItem trong Menu
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}

                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <Search />

                {/* Action button */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 50]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                    <span className={cx('badge')}>3</span>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Notification"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faBell} />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEM}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://p166-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dd85033197f64be28c23b0735e04e98f.jpeg?lk3s=a5d48078&x-expires=1704978000&x-signature=iWvKx8EpdfqQlBDzvZRhne%2BcZk0%3D"
                                className={cx('user-avatar')}
                                alt=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
