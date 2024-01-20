import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './ContentVideos.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBolt,
    faLink,
    faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import IconItem from './IconItem';
import ControlVideo from './ControlVideo';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import InfoVideo from './InfoVideo';
import {
    faFacebook,
    faLine,
    faLinkedin,
    faPinterest,
    faSquareReddit,
    faSquareTwitter,
    faSquareWhatsapp,
    faTelegram,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faBolt} />,
        title: 'Nhúng',
    },
    {
        icon: <FontAwesomeIcon icon={faTelegram} />,
        title: 'Gửi đến bạn bè',
    },
    {
        icon: <FontAwesomeIcon icon={faFacebook} />,
        title: 'Chia sẻ với Facebook',
    },
    {
        icon: <FontAwesomeIcon icon={faSquareWhatsapp} />,
        title: 'Chia sẻ với WhatsApp',
    },
    {
        icon: <FontAwesomeIcon icon={faLink} />,
        title: 'Sao chép liên kết',
    },
    {
        icon: <FontAwesomeIcon icon={faSquareTwitter} />,
        title: 'Chia sẻ với Twitter',
    },
    {
        icon: <FontAwesomeIcon icon={faLinkedin} />,
        title: 'Chia sẻ với Linkedin',
    },
    {
        icon: <FontAwesomeIcon icon={faSquareReddit} />,
        title: 'Chia sẻ với Reddit',
    },
    {
        icon: <FontAwesomeIcon icon={faTelegram} />,
        title: 'Chia sẻ với Telegram',
    },
    {
        icon: <FontAwesomeIcon icon={faSquareEnvelope} />,
        title: 'Chia sẻ với Email',
    },
    {
        icon: <FontAwesomeIcon icon={faLine} />,
        title: 'Chia sẻ với Line',
    },
    {
        icon: <FontAwesomeIcon icon={faPinterest} />,
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
        console.log(index);
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
                                            tabIndex="-1"
                                            {...attrs}
                                        >
                                            <PopperWrapper
                                                className={cx('menu-popper')}
                                            >
                                                {MENU_ITEM.map(
                                                    (item, index) => (
                                                        <MenuItem
                                                            data={item}
                                                            key={index}
                                                        />
                                                    ),
                                                )}
                                            </PopperWrapper>
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
