import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './StyleVideo.module.scss';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const cx = classNames.bind(styles);
const StyleVideo = forwardRef(
    ({ src, className, large = false, small = false, ...props }, ref) => {
        const videoRef = useRef();

        useImperativeHandle(ref, () => ({
            play() {
                videoRef.current.play();
            },
            pause() {
                videoRef.current.pause();
            },
            muted() {
                videoRef.current.muted = true;
            },
            unmuted() {
                videoRef.current.muted = false;
            },
            getCurrentTime() {
                return videoRef.current.currentTime;
            },
            getDuration() {
                return videoRef.current.duration;
            },
            addTimeUpdateListener(callback) {
                videoRef.current.addEventListener('timeupdate', callback);
            },
            addLoadedMetadataListener(callback) {
                videoRef.current.addEventListener('loadedmetadata', callback);
            },
            updateTimeClickListener(num) {
                return (videoRef.current.currentTime = num);
            },
            // removeTimeUpdateListener(callback) {
            //     videoRef.current.removeEventListener('timeupdate', callback);
            // },
            // removeLoadedMetadataListener(callback) {
            //     videoRef.current.removeEventListener(
            //         'loadedmetadata',
            //         callback,
            //     );
            // },
        }));

        const classes = cx('video', {
            [className]: className,
            large,
            small,
        });
        return (
            <video
                className={classes}
                ref={videoRef}
                src={src}
                loop
                {...props}
            ></video>
        );
    },
);

StyleVideo.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    large: PropTypes.bool,
    small: PropTypes.bool,
};

export default StyleVideo;
