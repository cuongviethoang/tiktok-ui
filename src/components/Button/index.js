import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    to, // neu co prop la to thi thay element button thanh the Link
    href, // neu co prop la href thay button thanh the a
    primary = false, // vi du nhu btn Log in tren giao dien
    outline = false, // vi du nhu kieu chi co mau chu va border hien len, khong co mau nen
    text = false, // vi du nhu upload tren giao dien
    rounded = false, // kieu bo goc 4 ben cho btn
    disable = false,
    small = false, // kieu nut nho
    large = false, // kieu nut lon
    children,
    className, // nhan className tu the cha
    leftIcon, // truyen prop icon den
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
                delete props[key]; // neu co prop la disable thi bo luon prop nhan hanh dong bang tu bang dau la on di
            }
        });
    }
    if (to) {
        props.to = to;
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

export default Button;
