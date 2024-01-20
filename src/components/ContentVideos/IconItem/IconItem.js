import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './IconItem.module.scss';

const cx = classNames.bind(styles);

function IconItem({
    icon,
    num,
    onClick,
    heart = false,
    bookMark = false,
    dataIndex,
    interactIndex,
}) {
    let classes;

    if (interactIndex === 1) {
        classes = cx('center', {
            heart,
        });
    } else if (interactIndex === 3) {
        classes = cx('center', {
            bookMark,
        });
    }
    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <span className={cx('icon')}>
                <span className={classes}>{icon}</span>
            </span>
            <span className={cx('number')}>{num}</span>
        </div>
    );
}

IconItem.propTypes = {
    icon: PropTypes.node,
    num: PropTypes.string,
};

export default IconItem;
