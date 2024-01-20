import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
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
import {
    UploadIcon,
    MessageIcon,
    NotificationIcon,
    UserIcon,
    BookMarkIcon,
    CoinIcon,
    LiveIcon,
    CreateIcon,
    SettingIcon,
    LanguageIcon,
    HelpIcon,
    KeyboardIcon,
    DarkModeIcon,
    LogoutIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

// menu khi chưa đăng nhập
const MENU_ITEM = [
    {
        icon: <LanguageIcon />,
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
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // Giả định người dùng chưa/đã đăng nhập
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    // menu khi đã đăng nhập
    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'Xem hồ sơ',
            to: '/@user',
        },
        {
            icon: <BookMarkIcon />,
            title: 'Yêu thích',
            to: '/loveLive',
        },
        {
            icon: <CoinIcon viewBox="0 0 20 20" />,
            title: 'Nhận xu',
            to: '/coin?enter_from=web_main_nav',
        },
        {
            icon: <LiveIcon />,
            title: 'Live studio',
            to: '/studio/download?enter_from=profile',
        },
        {
            icon: <CreateIcon viewBox="0 0 20 20" />,
            title: 'Trung tâm Nhà sáng tạo LIVE',
            to: '/live/creators?enter_from=portrait&lang=vi-VN&region=VN',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        {
            icon: <DarkModeIcon />,
            title: 'Chế độ sáng tối',
        },
        ...MENU_ITEM,
        {
            icon: <LogoutIcon />,
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
                                    <UploadIcon viewBox="0 0 30 30" />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>3</span>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Notification"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <NotificationIcon viewBox="0 0 30 30" />
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
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f1dfcd09aa4c2c7dca9d77f1f0433e4a~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705413600&x-signature=rFW13j7gE4zGqGQ7YK4F2Vm5vW8%3D"
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
