import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

function Image(
    {
        src,
        alt,
        className,
        fallback: customFallback = images.noImage,
        ...props
    },
    ref,
) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    const classes = cx('wrapper', className);
    return (
        <img
            className={classes}
            src={fallback || src}
            ref={ref}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
