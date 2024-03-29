import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchService from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import useDebounce from '~/hooks/useDebounce';
import MapTool from '~/components/Maptool';

import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    // gọi api tìm kiếm người dùng
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    // click vào icon clear để xóa các kí tự trong ô input
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    // bắt sự kiện ấn ra ngoài HeadlessTippy này
    const handleHideResult = () => {
        setShowResult(false);
    };

    // nếu gõ vào ô input chữ cái đầu là dấu cách thì không bắt sự kiện setSearchValue
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        // hiểu nom na là thêm 1 thẻ cha cho Tippy để  không xảy ra sự kiện nổi bọt cho thẻ cha ở bên ngoài
        <div>
            <HeadlessTippy
                offset={[0, 0]} // điều chỉnh vị trí của Tippy
                interactive // mac dinh ko the select vao Tippy thi interactive = false cta phai thay bang true
                visible={showResult && searchResult.length > 0} // nếu mảng có phần tử và input đc focus thì dữ liệu mới hiện lên
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <MapTool data={searchResult} />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult} // bắt sự kiện ấn ra ngoài HeadlessTippy này
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
