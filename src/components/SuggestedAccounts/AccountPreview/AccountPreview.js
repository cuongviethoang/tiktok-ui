import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/48b79b557748bf7f676500a458c0d666.jpeg?lk3s=a5d48078&x-expires=1705237200&x-signature=SpywNkQghps8lU%2FxNcXUhES1c1E%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>cuong xoan</strong>
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Hoang Viet Cuong</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>20.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
