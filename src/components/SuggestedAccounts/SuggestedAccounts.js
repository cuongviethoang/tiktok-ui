import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { memo, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const MENU_USER = [
    {
        srcImage:
            'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f1dfcd09aa4c2c7dca9d77f1f0433e4a~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705413600&x-signature=rFW13j7gE4zGqGQ7YK4F2Vm5vW8%3D',
        nickName: 'cuongxoan',
        fullName: 'Hoang Viet Cuong',
        tich: 'true',
        followers: '8.2M',
        likes: '20M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/48b79b557748bf7f676500a458c0d666.jpeg?lk3s=a5d48078&x-expires=1705237200&x-signature=SpywNkQghps8lU%2FxNcXUhES1c1E%3D',
        nickName: 'tienanh',
        fullName: 'Tien Anh',
        followers: '5.2M',
        likes: '16.5M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/48b79b557748bf7f676500a458c0d666.jpeg?lk3s=a5d48078&x-expires=1705237200&x-signature=SpywNkQghps8lU%2FxNcXUhES1c1E%3D',
        nickName: 'lebong',
        fullName: 'Le Bong',
        tich: 'true',
        followers: '12.2M',
        likes: '40M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/48b79b557748bf7f676500a458c0d666.jpeg?lk3s=a5d48078&x-expires=1705237200&x-signature=SpywNkQghps8lU%2FxNcXUhES1c1E%3D',
        nickName: 'khanhhuyen',
        fullName: 'Nguyen Khanh Huyen',
        tich: 'true',
        followers: '10.2M',
        likes: '30M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3379049dc8706caa2d809b70cc7d36a9.jpeg?lk3s=a5d48078&x-expires=1705492800&x-signature=jeY6sda%2BqONU2jOkF2IyBA33sD8%3D',
        nickName: 'gearnvn.store',
        fullName: 'Gearvn VietNam',
        tich: 'true',
        followers: '7.2M',
        likes: '10M',
    },
    {
        srcImage:
            'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bf41e4cc6f907fcbe64fd023c1259d8c~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=h%2B%2F6OzL46LLU6es2X263zEbECnE%3D',
        nickName: '_halinhtran_',
        fullName: 'Trần Hà Linh',
        followers: '13.2M',
        likes: '21.3M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7d4ac7e9eaf2a73bf58d59bd5437d31a.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=moCseLFC2aC7FmcU2XF4%2Bd5JMCs%3D',
        nickName: 'thubee23',
        fullName: 'Vũ Minh Thư',
        followers: '13.2M',
        likes: '21.3M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22769d504f6fab8f54048d37565eaef1.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=IYAu2TacIpgTqtINGAYsYpuPV9Y%3D',
        nickName: 'firelop.com',
        fullName: 'Firelop.com',
        followers: '15.2M',
        likes: '21.3M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22769d504f6fab8f54048d37565eaef1.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=IYAu2TacIpgTqtINGAYsYpuPV9Y%3D',
        nickName: 'firelop.com',
        fullName: 'Firelop.com',
        followers: '15.2M',
        likes: '21.3M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22769d504f6fab8f54048d37565eaef1.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=IYAu2TacIpgTqtINGAYsYpuPV9Y%3D',
        nickName: 'firelop.com',
        fullName: 'Firelop.com',
        followers: '15.2M',
        likes: '21.3M',
    },
];

const MENU_FOLLOW_USER = [
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/fac217f8866bd7908a54d57d703d71e6.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=aqedzN20RL%2BMo1bIlgG8GWEGoM4%3D',
        nickName: 'tulieuquygia',
        fullName: 'Tư Liệu Quý Giá',
        tich: 'true',
        followers: '4.2M',
        likes: '10M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/48b79b557748bf7f676500a458c0d666.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=7Q2O1gjfn5Otq2Bfv9rhydOaaZg%3D',
        nickName: 'codetheworld.io',
        fullName: 'Code The World',
        followers: '5.2M',
        likes: '16.5M',
    },
    {
        srcImage:
            'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3d592a461b8cfaba442980e118c1ab02~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=WPCD2Uh8qZBJpah%2BcU2V8jQoeXA%3D',
        nickName: 'webguild',
        fullName: 'webguild',
        followers: '12.2M',
        likes: '40M',
    },
    {
        srcImage:
            'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1585d1ee9a94f19cba546401365cd828~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=UJbCI9goeuhi4pGue7MzcqA8djw%3D',
        nickName: 'easy_learn_axis',
        fullName: 'Easy Learn Axis',
        followers: '10.2M',
        likes: '30M',
    },
    {
        srcImage:
            'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e7ba40b92ee6043eff98a841fb688d1d~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=bs6tcdrZuLvDrem7zo5OPRdjM6c%3D',
        nickName: 'the_review_2',
        fullName: 'The_review',
        followers: '7.2M',
        likes: '10M',
    },
    {
        srcImage:
            'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bf41e4cc6f907fcbe64fd023c1259d8c~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=h%2B%2F6OzL46LLU6es2X263zEbECnE%3D',
        nickName: '_halinhtran_',
        fullName: 'Trần Hà Linh',
        followers: '13.2M',
        likes: '21.3M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7d4ac7e9eaf2a73bf58d59bd5437d31a.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=moCseLFC2aC7FmcU2XF4%2Bd5JMCs%3D',
        nickName: 'thubee23',
        fullName: 'Vũ Minh Thư',
        followers: '13.2M',
        likes: '21.3M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22769d504f6fab8f54048d37565eaef1.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=IYAu2TacIpgTqtINGAYsYpuPV9Y%3D',
        nickName: 'firelop.com',
        fullName: 'Firelop.com',
        followers: '15.2M',
        likes: '21.3M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22769d504f6fab8f54048d37565eaef1.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=IYAu2TacIpgTqtINGAYsYpuPV9Y%3D',
        nickName: 'firelop.com',
        fullName: 'Firelop.com',
        followers: '15.2M',
        likes: '21.3M',
    },
    {
        srcImage:
            'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/22769d504f6fab8f54048d37565eaef1.jpeg?lk3s=a5d48078&x-expires=1705496400&x-signature=IYAu2TacIpgTqtINGAYsYpuPV9Y%3D',
        nickName: 'firelop.com',
        fullName: 'Firelop.com',
        followers: '15.2M',
        likes: '21.3M',
    },
];
function SuggestedAccounts({ label, following = false }) {
    const [listSuggestedAccounts, setListSuggestedAccounts] = useState([]);
    const [checkAll, setCheckAll] = useState(false);

    useEffect(() => {
        if (checkAll === false) {
            following
                ? setListSuggestedAccounts(MENU_FOLLOW_USER.slice(0, 5))
                : setListSuggestedAccounts(MENU_USER.slice(0, 5));
        } else {
            following
                ? setListSuggestedAccounts(MENU_FOLLOW_USER)
                : setListSuggestedAccounts(MENU_USER);
        }
    }, [checkAll]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {listSuggestedAccounts.map((account, index) => (
                <AccountItem
                    key={index}
                    srcImage={account.srcImage}
                    nickName={account.nickName}
                    fullName={account.fullName}
                    tich={account.tich ? true : false}
                    followers={account.followers}
                    likes={account.likes}
                />
            ))}

            {
                <p
                    className={cx('more-btn')}
                    onClick={() => setCheckAll(!checkAll)}
                >
                    {checkAll ? 'Rút gọn' : 'Xem thêm'}
                </p>
            }
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default memo(SuggestedAccounts);
