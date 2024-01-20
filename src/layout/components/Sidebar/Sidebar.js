import { useState } from 'react';
import classNames from 'classnames/bind';
import { Scrollbars } from 'react-custom-scrollbars';

import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layout/components/Sidebar/Menu';
import {
    HomeIcon,
    FollowIcon,
    FriendIcon,
    DiscoverIcon,
    LiveIcon,
    ProfileIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);
function Sidebar({ onScroll }) {
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
            onScroll={onScroll}
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
                        icon={<HomeIcon width="3.2rem" height="3.2rem" />}
                    />
                    <MenuItem
                        title="Đang Follow"
                        to={config.routes.following}
                        icon={<FollowIcon width="2.4rem" height="2.4rem" />}
                    />
                    <MenuItem
                        title="Bạn bè"
                        to={config.routes.friend}
                        icon={<FriendIcon width="3.2rem" height="3.2rem" />}
                    />
                    <MenuItem
                        title="Khám phá"
                        to={config.routes.explore}
                        icon={<DiscoverIcon width="3.2rem" height="3.2rem" />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon width="2.4rem" height="2.4rem" />}
                    />
                    <MenuItem
                        title="Hồ sơ"
                        to={config.routes.profile}
                        icon={<ProfileIcon width="2.4rem" height="2.4rem" />}
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
