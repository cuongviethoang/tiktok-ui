import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ContentVideos.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faCheckCircle,
    faCommentDots,
    faHeart,
    faMusic,
    faShare,
} from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import IconItem from './IconItem';
import ControlVideo from './ControlVideo';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    return (
        <div className={cx('container')}>
            <Image className={cx('image')} src={data.src} alt="" />

            <div className={cx('inner')}>
                <div className={cx('info')}>
                    <div className={cx('info-name')}>
                        <p className={cx('nickname')}>
                            {data.nickName}
                            {data.tick && (
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faCheckCircle}
                                />
                            )}
                        </p>
                        <p className={cx('name')}>{data.fullName}</p>
                    </div>
                    <Button
                        outline
                        children="Follower"
                        className={cx('button')}
                    />
                    <div className={cx('desc')}>
                        <span className={cx('content')}>
                            {data.content}{' '}
                            {data.linkTag.map((link, index) => (
                                <a
                                    href={`/${link}`}
                                    className={cx('tag')}
                                    key={index}
                                >
                                    {link.tag}
                                </a>
                            ))}
                        </span>
                    </div>
                    <div className={cx('music')}>
                        <FontAwesomeIcon
                            icon={faMusic}
                            className={cx('icon-music')}
                        />
                        <a
                            href={`/${data.linkSong}`}
                            className={cx('link-music')}
                        >
                            {data.linkSong}
                        </a>
                    </div>
                </div>
                <div className={cx('info-video')}>
                    <ControlVideo src={data.video} />
                    <div className={cx('list-icon')}>
                        <IconItem
                            icon={<FontAwesomeIcon icon={faHeart} />}
                            num={data.numLikes}
                        />
                        <IconItem
                            icon={<FontAwesomeIcon icon={faCommentDots} />}
                            num={data.numLikes}
                        />
                        <IconItem
                            icon={<FontAwesomeIcon icon={faBookmark} />}
                            num={data.numLikes}
                        />
                        <IconItem
                            icon={<FontAwesomeIcon icon={faShare} />}
                            num={data.numLikes}
                        />
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
