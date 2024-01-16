import Menu, { MenuItem } from '~/layout/components/Sidebar/Menu';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Sidebar() {
    const [checkMouseInSide, setCheckMouseInSide] = useState(false);

    const handleMouseEnter = () => {
        setCheckMouseInSide(false);
    };

    const handleMouseLeave = () => {
        setCheckMouseInSide(true);
    };

    const renderTrackVertical = ({ style, ...props }) => {
        const trackStyle = {
            width: '6px',
            right: '0',
            borderRadius: '3px',
            height: '100%',
        };
        return <div style={{ ...style, ...trackStyle }} {...props} />;
    };

    const renderThumbVertical = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: 'rgba(22, 24, 35, 0.06)', // Màu sắc của nút cuộn
            borderRadius: '3px',
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    return (
        <aside
            className={cx('wrapper')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Scrollbars
                autoHide={checkMouseInSide} //  Thuộc tính này là một hàm gọi lại sẽ được kích hoạt khi sự kiện cuộn xảy ra.
                autoHideTimeout={1000} // Thời gian tính bằng mili giây trước khi thanh cuộn tự động ẩn bắt đầu.
                autoHideDuration={600} // Thời gian tính bằng mili giây cho thanh cuộn phai mờ trong quá trình tự động ẩn.
                renderTrackVertical={renderTrackVertical} // hàm để vẽ thanh dọc. Nó cho phép bạn tùy chỉnh giao diện của thanh cuộn dọc.
                renderThumbVertical={renderThumbVertical} // hàm để vẽ nút cuộn dọc. Nó cho phép bạn tùy chỉnh giao diện của nút cuộn dọc.
            >
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<FontAwesomeIcon icon={faHouse} />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<FontAwesomeIcon icon={faUsers} />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<FontAwesomeIcon icon={faVideo} />}
                    />
                </Menu>

                <SuggestedAccounts label="Các tài khoản nên theo dõi" />
                <SuggestedAccounts
                    label="Các tài khoản đang theo dõi"
                    following={true}
                />
            </Scrollbars>
        </aside>
    );
}

export default Sidebar;
