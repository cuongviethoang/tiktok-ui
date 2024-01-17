import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);
function Video({ src }) {
    return <video className={cx('video')} src={src}></video>;
}

Video.propTypes = {
    src: PropTypes.string,
};

export default Video;
