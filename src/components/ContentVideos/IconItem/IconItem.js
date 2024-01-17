import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './IconItem.module.scss';

const cx = classNames.bind(styles);

function IconItem({ icon, num }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('number')}>{num}</span>
        </div>
    );
}

IconItem.propTypes = {
    icon: PropTypes.node,
    num: PropTypes.string,
};

export default IconItem;
