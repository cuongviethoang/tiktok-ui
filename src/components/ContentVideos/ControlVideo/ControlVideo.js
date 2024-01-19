import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ControlVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsis,
    faPause,
    faPlay,
    faVolumeHigh,
    faVolumeXmark,
    faThumbsDown,
    faFlag,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import StyleVideo from '~/components/ContentVideos/StyleVideo';

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faThumbsDown} />,
        title: 'Không quan tâm',
    },
    {
        icon: <FontAwesomeIcon icon={faFlag} />,
        title: 'Báo cáo',
    },
];

const cx = classNames.bind(styles);
const ControlVideo = ({ src }) => {
    const videoRef = useRef();

    const [checkTurnVideo, setCheckTurnVideo] = useState(false);
    const [checkTurnVolume, setCheckTurnVolume] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // pause dừng video
    const handleTurnControlOff = () => {
        setCheckTurnVideo(!checkTurnVideo);
        videoRef.current.pause();
    };

    // play video
    const handleTurnControlOn = () => {
        setCheckTurnVideo(!checkTurnVideo);
        setCheckTurnVolume(true);
        videoRef.current.play();
        videoRef.current.unmuted();
    };

    // tắt tiếng
    const handleTurnVolumeMute = () => {
        setCheckTurnVolume(!checkTurnVolume);
        videoRef.current.muted();
    };

    // bật tiếng
    const handleTurnVolumeOn = () => {
        setCheckTurnVolume(!checkTurnVolume);
        videoRef.current.unmuted();
    };

    // xử lý tua video
    const handleProgressBarClick = (e) => {
        const video = videoRef.current;
        const clickPosition =
            e.clientX - e.currentTarget.getBoundingClientRect().left;
        const progressBarWidth = e.currentTarget.offsetWidth;
        const percentageClicked = clickPosition / progressBarWidth;

        const currentClick = duration * percentageClicked;
        setCurrentTime(currentClick);
        video.updateTimeClickListener(currentClick);
    };

    useEffect(() => {
        const video = videoRef.current;

        // cập nhật thời gian đang chạy của video
        const handleTimeUpdate = () => {
            setCurrentTime(video.getCurrentTime());
        };

        // cập nhật tổng thời gian video
        const handleLoadedMetadata = () => {
            setDuration(video.getDuration());
        };

        video.addTimeUpdateListener(handleTimeUpdate);
        video.addLoadedMetadataListener(handleLoadedMetadata);

        return () => {
            video.removeTimeUpdateListener(handleTimeUpdate);
            video.removeLoadedMetadataListener(handleLoadedMetadata);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <StyleVideo src={src} ref={videoRef} />
            {checkTurnVideo ? (
                <FontAwesomeIcon
                    icon={faPause}
                    className={cx('icon-video', 'control')}
                    onClick={handleTurnControlOff}
                />
            ) : (
                <FontAwesomeIcon
                    icon={faPlay}
                    className={cx('icon-video', 'control')}
                    onClick={handleTurnControlOn}
                />
            )}
            {checkTurnVolume ? (
                <FontAwesomeIcon
                    icon={faVolumeHigh}
                    className={cx('icon-video', 'volume')}
                    onClick={handleTurnVolumeMute}
                />
            ) : (
                <FontAwesomeIcon
                    icon={faVolumeXmark}
                    className={cx('icon-video', 'volume')}
                    onClick={handleTurnVolumeOn}
                />
            )}

            <span>
                <Tippy
                    interactive
                    delay={[0, 200]}
                    offset={[-490, 20]}
                    placement="right"
                    render={(props) => (
                        <div tabIndex="-1" {...props}>
                            <PopperWrapper>
                                {MENU_ITEM.map((item, index) => (
                                    <MenuItem data={item} key={index} />
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div>
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            className={cx('icon-video', 'dot')}
                        />
                    </div>
                </Tippy>
            </span>

            <div className={cx('progress')}>
                <div
                    className={cx('progress-bar')}
                    onClick={handleProgressBarClick}
                >
                    <div
                        className={cx('progress-bar-fill')}
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                </div>

                <p className={cx('progress-bar-num')}>
                    {formatTime(currentTime)} / {formatTime(duration)}
                </p>
            </div>
        </div>
    );
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(
        remainingSeconds,
    ).padStart(2, '0')}`;
};

ControlVideo.propTypes = {
    src: PropTypes.string.isRequired,
};

export default ControlVideo;
