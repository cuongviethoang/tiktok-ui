import Menu, { MenuItem } from '~/layout/components/Sidebar/Menu';
import config from '~/config';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
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
        </aside>
    );
}

export default Sidebar;
