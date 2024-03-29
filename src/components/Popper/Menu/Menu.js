import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
    children,
    items = [],
    onChange = defaultFn,
    hideOnClick = false,
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; // lấy object cuối cùng của mảng

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

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    // hiển thị dữ liệu trong Tippy qua thuộc tính render
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header title={current.title} onBack={handleBack} />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Khi vào menu cấp 2 trên header, di chuột ra ngoài Tippy bị ấn đi, khi chỉ chuột vào tự động về menu cấp 1 không còn ở menu cấp 2 nữa
    const handleRestMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive // mac dinh ko the select vao Tippy thi interactive = false cta phai thay bang true
            delay={[0, 700]} // nhan mang an hoac hien , sau 500ms thi an di, sau 0s thi hien ngay
            offset={[12, 8]} // lech len tren 12px va lech sang phai 8px (x,y)
            hideOnClick={hideOnClick} // muốn Tiipy khong bị ẩn đi khi click vào thì thay thuộc tính hideOnClick = false
            placement="bottom-end" //dat vi tri cua tippy
            render={renderResult}
            onHide={handleRestMenu} // kiểm tra nếu tippy không hiện lên nữa thì cho menu quay trở về cấp ban đầu, xóa cấp 1 hoặc cấp 2 đi
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
