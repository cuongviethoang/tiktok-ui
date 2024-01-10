import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p166-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/93cf0b0c10af03c36e183041a461d6f4.jpeg?lk3s=a5d48078&x-expires=1704895200&x-signature=yhX9cOHlC3NjfhK6awXjqk4%2FF%2Fk%3D"
                alt="ten"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    />
                </h4>
                <span className={cx('username')}>Nguyen Van A</span>
            </div>
        </div>
    );
}

export default AccountItem;
