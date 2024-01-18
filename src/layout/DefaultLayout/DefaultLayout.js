import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

import Header from '~/layout/components/Header';
import Sidebar from '~/layout/components/Sidebar';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    // Khi trang được cuộn, kiểm tra vị trí và cập nhật trạng thái của nút
    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Thêm sự kiện lắng nghe khi component được mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup sự kiện khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Cuộn lên đầu trang khi nút được nhấn
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Tạo hiệu ứng cuộn mượt
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar className={cx('sidebar')} />
                <div className={cx('content')}>{children}</div>
            </div>

            {isVisible && (
                <Tippy
                    delay={[0, 50]}
                    content="Cuộn lên đầu trang"
                    placement="bottom"
                >
                    <button className={cx('icons')} onClick={scrollToTop}>
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faSquareCaretUp}
                        />
                    </button>
                </Tippy>
            )}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
