import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                const next = [...prev, item.children];
                                return next;
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive // mac dinh ko the select vao Tippy thi interactive = false cta phai thay bang true
            delay={[0, 700]} // nhan mang an hoac hien , sau 500ms thi an di, sau 0s thi hien ngay
            offset={[12, 8]} // lech len tren 12px va lech sang phai 8px
            placement="bottom-end" //dat vi tri cua tippy
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    );
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))} // kiểm tra nếu tippy không hiện lên nữa thì cho menu quay trở về cấp ban đầu, xóa cấp 1 hoặc cấp 2 đi
        >
            {children}
        </Tippy>
    );
}

export default Menu;
