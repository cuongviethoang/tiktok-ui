import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomeVideos from '~/components/ContentVideos';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <HomeVideos />
        </div>
    );
}

export default Home;
