import classNames from 'classnames/bind';
import styles from './InfoVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);
function InfoVideo({ data }) {
    return (
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
            <Button outline children="Follower" className={cx('button')} />
            <div className={cx('desc')}>
                <span className={cx('content')}>
                    {data.content}{' '}
                    {data.linkTag.map((link, index) => (
                        <a href={`/${link}`} className={cx('tag')} key={index}>
                            {link.tag}
                        </a>
                    ))}
                </span>
            </div>
            <div className={cx('music')}>
                <FontAwesomeIcon icon={faMusic} className={cx('icon-music')} />
                <a href={`/${data.linkSong}`} className={cx('link-music')}>
                    {data.linkSong}
                </a>
            </div>
        </div>
    );
}

export default InfoVideo;
