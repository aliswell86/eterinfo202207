import React from 'react';
import styles from './AdsenseWherebox.scss';
import classNames from 'classnames/bind';
import ReactiveAdsense from 'components/adsense/common/ReactiveAdsense';

const cx = classNames.bind(styles);

const AdsenseWherebox = () => {
  return (
    <div className={cx('adsense-wherebox')}>
      <ReactiveAdsense/>
    </div>
  );
};

export default AdsenseWherebox;  