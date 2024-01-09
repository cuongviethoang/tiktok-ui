import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem data={item} key={index} />);
    };

    return (
        <Tippy
            interactive // mac dinh ko the select vao Tippy thi interactive = false cta phai thay bang true
            delay={[0, 700]} // nhan mang an hoac hien , sau 500ms thi an di, sau 0s thi hien ngay
            placement="bottom-end" //dat vi tri cua tippy
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
