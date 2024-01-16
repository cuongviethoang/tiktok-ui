import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { memo } from 'react';

const cx = classNames.bind(styles);

function AccountPreview({
    srcImage,
    nickName,
    fullName,
    tich = false,
    followers,
    likes,
}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={srcImage} alt="" />
                <Button className={cx('follow-btn')} primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{nickName}</strong>
                    {tich && (
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faCheckCircle}
                        />
                    )}
                </p>
                <p className={cx('name')}>{fullName}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{followers}</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{likes}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default memo(AccountPreview);
