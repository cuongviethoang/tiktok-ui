import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    to, // neu co prop la to thi thay element button thanh thẻ Link
    href, // neu co prop la href thay button thanh the a
    primary = false, // vi du nhu btn Log in tren giao dien
    outline = false, // vi du nhu kieu chi co mau chu va border hien len, khong co mau nen
    text = false, // vi du nhu upload tren giao dien
    rounded = false, // kieu bo goc 4 ben cho btn
    disable = false, // nếu button nào có prop này thì chỉ được dùng để hiện thị không cho bắt sự kiện
    small = false, // kieu nut nho
    large = false, // kieu nut lon
    children, // nội dung bên trong button
    className, // nhan className tu the cha
    leftIcon, // truyen prop icon
    rightIcon,
    onClick, // truyen hanh dong onClick xuong
    ...passProps // tat ca ca thuoc tinh con lai khong thuoc cac thuoc tinh tren
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]; // nếu có prop là disable thì bỏ luôn prop nhận hành động bằng từ on (ví dụ: onClick, onDoubleClick, ...)
            }
        });
    }
    if (to) {
        props.to = to; // thêm 1 prop được truyền đến là to vào thêm vào props
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disable,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
