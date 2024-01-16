import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);
function AccountItem({ srcImage, nickName, fullName, tich, followers, likes }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview
                        srcImage={srcImage}
                        nickName={nickName}
                        fullName={fullName}
                        tich={tich}
                        followers={followers}
                        likes={likes}
                    />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <Link to={`/@${nickName}`} className={cx('account-item')}>
                    <Image alt="" className={cx('avatar')} src={srcImage} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{nickName}</strong>
                            {tich && (
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faCheckCircle}
                                />
                            )}
                        </p>
                        <p className={cx('name')}>{fullName}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    srcImage: PropTypes.string,
    nickName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
};

export default memo(AccountItem);
