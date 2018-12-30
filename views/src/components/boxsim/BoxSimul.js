import React from 'react';
import styles from './BoxSimul.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BoxSimul = () => {
  return (
    <div className={cx('box-simul')}>
      <div className={cx('box-kinds')}>
        <h2 className={cx('box-kinds-title')}>박스를 선택하세요.</h2>
        <div className={cx('boxs')}>

          <div className={cx('box')}>
            <div className={cx('title')}>[EL]CAG의 악세서리</div>
            <div className={cx('box_img')}>
              <img src='/resource/img/box_img1.gif' alt="box1"/>
            </div>
          </div>
          <div className={cx('box')}>
            <div className={cx('title')}>[EL]CAG의 악세서리</div>
            <div className={cx('box_img')}>
              <img src='/resource/img/box_img1.gif' alt="box1"/>
            </div>
          </div>
          <div className={cx('box')}>
            <div className={cx('title')}>[EL]CAG의 악세서리</div>
            <div className={cx('box_img')}>
              <img src='/resource/img/box_img1.gif' alt="box1"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BoxSimul;