import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
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

    const handleTurnControlOff = () => {
        setCheckTurnVideo(!checkTurnVideo);
        videoRef.current.pause();
    };

    const handleTurnControlOn = () => {
        setCheckTurnVideo(!checkTurnVideo);
        setCheckTurnVolume(true);
        videoRef.current.play();
        videoRef.current.unmuted();
    };

    const handleTurnVolumeMute = () => {
        setCheckTurnVolume(!checkTurnVolume);
        videoRef.current.muted();
    };

    const handleTurnVolumeOn = () => {
        setCheckTurnVolume(!checkTurnVolume);
        videoRef.current.unmuted();
    };

    const renderTippy = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    {MENU_ITEM.map((item, index) => (
                        <MenuItem data={item} key={index} />
                    ))}
                </PopperWrapper>
            </div>
        );
    };

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

            <Tippy
                interactive
                delay={[0, 200]}
                offset={[-490, 0]}
                placement="right"
                render={renderTippy}
            >
                <div>
                    <FontAwesomeIcon
                        icon={faEllipsis}
                        className={cx('icon-video', 'dot')}
                    />
                </div>
            </Tippy>
        </div>
    );
};

ControlVideo.propTypes = {
    src: PropTypes.string.isRequired,
};

export default ControlVideo;
