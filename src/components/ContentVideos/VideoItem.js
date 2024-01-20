import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './ContentVideos.module.scss';

import Image from '~/components/Image';
import IconItem from './IconItem';
import ControlVideo from './ControlVideo';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import InfoVideo from './InfoVideo';

import {
    EmbedIcon,
    EmailIcon,
    ShareIcon,
    FacebookIcon,
    WhatsAppIcon,
    LinkIcon,
    TwitterIcon,
    LinkedInIcon,
    RedditIcon,
    TelegramIcon,
    LineIcon,
    PinterestIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <EmbedIcon width="2.6rem" height="2.6rem" viewBox="0 0 24 24" />,
        title: 'Nhúng',
    },
    {
        icon: <ShareIcon width="2.6rem" height="2.6rem" viewBox="0 0 24 24" />,
        title: 'Gửi đến bạn bè',
    },
    {
        icon: <FacebookIcon width="2.6rem" height="2.6rem" />,
        title: 'Chia sẻ với Facebook',
    },
    {
        icon: <WhatsAppIcon width="2.6rem" height="2.6rem" />,
        title: 'Chia sẻ với WhatsApp',
    },
    {
        icon: <LinkIcon width="2.6rem" height="2.6rem" viewBox="0 0 24 24" />,
        title: 'Sao chép liên kết',
    },
    {
        icon: <TwitterIcon width="2.6rem" height="2.6rem" />,
        title: 'Chia sẻ với Twitter',
    },
    {
        icon: <LinkedInIcon width="2.6rem" height="2.6rem" />,
        title: 'Chia sẻ với Linkedin',
    },
    {
        icon: <RedditIcon width="2.6rem" height="2.6rem" viewBox="0 0 24 24" />,
        title: 'Chia sẻ với Reddit',
    },
    {
        icon: <TelegramIcon width="2.6rem" height="2.6rem" />,
        title: 'Chia sẻ với Telegram',
    },
    {
        icon: <EmailIcon width="2.6rem" height="2.6rem" />,
        title: 'Chia sẻ với Email',
    },
    {
        icon: <LineIcon width="2.6rem" height="2.6rem" />,
        title: 'Chia sẻ với Line',
    },
    {
        icon: <PinterestIcon width="2.6rem" height="2.6rem" />,
        title: 'Chia sẻ với Pinterest',
    },
];

function VideoItem({ data }) {
    const [checkIconHeart, setCheckIconHeart] = useState(false);
    const [checkIconComment, setCheckIconComment] = useState(false);
    const [checkIconBookMark, setCheckIconBookMark] = useState(false);
    const [checkIconShare, setCheckIconShare] = useState(false);

    const handleClickItem = (index) => {
        switch (index) {
            case 1:
                setCheckIconHeart(!checkIconHeart);
                break;
            case 3:
                setCheckIconBookMark(!checkIconBookMark);
                break;
            case 2:
                setCheckIconComment(!checkIconComment);
                break;
            default:
                setCheckIconShare(!checkIconShare);
        }
    };

    const handleDisableScroll = (e) => {
        e.isPropagationStopped();
    };

    return (
        <div className={cx('container')}>
            <Image className={cx('image')} src={data.src} alt="" />

            <div className={cx('inner')}>
                <InfoVideo data={data} />
                <div className={cx('info-video')}>
                    <ControlVideo src={data.video} />
                    <div className={cx('list-icon')}>
                        {data.interacts.map((interact) =>
                            interact.id === 4 ? (
                                <Tippy
                                    key={interact.id}
                                    interactive // mac dinh ko the select vao Tippy thi interactive = false cta phai thay bang true
                                    delay={[0, 400]} // nhan mang an hoac hien , sau 500ms thi an di, sau 0s thi hien ngay
                                    offset={[65, 0]} // lech len tren 12px va lech sang phai 8px (x,y)
                                    placement="top" //dat vi tri cua tippy
                                    render={(attrs) => (
                                        <div
                                            className={cx('menu-list')}
                                            onScroll={handleDisableScroll}
                                            tabIndex="-1"
                                            {...attrs}
                                        >
                                            {MENU_ITEM.map((item, index) => (
                                                <MenuItem
                                                    data={item}
                                                    key={index}
                                                />
                                            ))}
                                        </div>
                                    )}
                                >
                                    <div>
                                        <IconItem
                                            icon={interact.icon}
                                            num={interact.num}
                                            dataIndex={data.id}
                                            interactIndex={interact.id}
                                            onClick={() =>
                                                handleClickItem(interact.id)
                                            }
                                            heart={
                                                checkIconHeart ? true : false
                                            }
                                            bookMark={
                                                checkIconBookMark ? true : false
                                            }
                                        />
                                    </div>
                                </Tippy>
                            ) : (
                                <div key={interact.id}>
                                    <IconItem
                                        icon={interact.icon}
                                        num={interact.num}
                                        dataIndex={data.id}
                                        interactIndex={interact.id}
                                        onClick={() =>
                                            handleClickItem(interact.id)
                                        }
                                        heart={checkIconHeart ? true : false}
                                        bookMark={
                                            checkIconBookMark ? true : false
                                        }
                                    />
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoItem;
