import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/48b79b557748bf7f676500a458c0d666.jpeg?lk3s=a5d48078&x-expires=1705237200&x-signature=SpywNkQghps8lU%2FxNcXUhES1c1E%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>cuong xoan</strong>
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Hoang Viet Cuong</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
