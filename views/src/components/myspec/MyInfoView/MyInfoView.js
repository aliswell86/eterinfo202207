import React from 'react';
import styles from './MyInfoView.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const MyInfoView = ({myStat}) => {
  const {invenDmg, invenCri, headShotRt, totalDmg} = myStat;
  const {normalDmg, normalDmgFire, criDmg, criDmgFire, headDmg, headDmgFire} = totalDmg;

  return (
    <div className={cx('myinfo-view')}>
      <h2 className={cx('view-title')}>인벤정보</h2>
      <div className={cx('inven-body')}>
        <div className={cx('inven-dmg')}>
          <NumberFormat value={invenDmg} displayType={'text'} thousandSeparator={true} prefix={'공격력: '} />
        </div>
        <div className={cx('inven-cri')}>
          <NumberFormat value={invenCri} displayType={'text'} thousandSeparator={true} prefix={'치명: '} suffix={'%'} />
          <NumberFormat value={headShotRt} displayType={'text'} thousandSeparator={true} prefix={'/헤드샷: '} suffix={'배'} />
        </div>        
      </div>
      <div className={cx('real-dmg')}>
        <h2 className={cx('real-dmg-title')}>실제예상데미지</h2>
        <div className={cx('real-dmg-body')}>
          <div className={cx('normar-dmg')}>
            <div className={cx('normar-dmg-title')}>일반데미지</div>
            <div className={cx('normar-dmg-body')}>
              <NumberFormat value={normalDmg.min} displayType={'text'} thousandSeparator={true}/>
              <span className={cx('point')}>~</span>
              <NumberFormat value={normalDmg.max} displayType={'text'} thousandSeparator={true}/>
            </div>
          </div>
          <div className={cx('normar-dmg-fire')}>
            <div className={cx('normar-dmg-fire-title')}>일반데미지(발화)</div>
            <div className={cx('normar-dmg-fire-body')}>
              <NumberFormat value={normalDmgFire.min} displayType={'text'} thousandSeparator={true}/>
              <span className={cx('point')}>~</span>
              <NumberFormat value={normalDmgFire.max} displayType={'text'} thousandSeparator={true}/>
            </div>
          </div>
          <div className={cx('cri-dmg')}>
            <div className={cx('cri-dmg-title')}>크리데미지</div>
            <div className={cx('cri-dmg-body')}>
              <NumberFormat value={criDmg.min} displayType={'text'} thousandSeparator={true}/>
              <span className={cx('point')}>~</span>
              <NumberFormat value={criDmg.max} displayType={'text'} thousandSeparator={true}/>
            </div>
          </div>
          <div className={cx('cri-dmg-fire')}>
            <div className={cx('cri-dmg-fire-title')}>크리데미지(발화)</div>
            <div className={cx('cri-dmg-fire-body')}>
              <NumberFormat value={criDmgFire.min} displayType={'text'} thousandSeparator={true}/>
              <span className={cx('point')}>~</span>
              <NumberFormat value={criDmgFire.max} displayType={'text'} thousandSeparator={true}/>
            </div>
          </div>
          <div className={cx('head-dmg')}>
            <div className={cx('head-dmg-title')}>헤드,카운터데미지</div>
            <div className={cx('head-dmg-body')}>
              <NumberFormat value={headDmg.min} displayType={'text'} thousandSeparator={true}/>
              <span className={cx('point')}>~</span>
              <NumberFormat value={headDmg.max} displayType={'text'} thousandSeparator={true}/>
            </div>
          </div>
          <div className={cx('head-dmg-fire')}>
            <div className={cx('head-dmg-fire-title')}>헤드,카운터데미지(발화)</div>
            <div className={cx('head-dmg-fire-body')}>
              <NumberFormat value={headDmgFire.min} displayType={'text'} thousandSeparator={true}/>
              <span className={cx('point')}>~</span>
              <NumberFormat value={headDmgFire.max} displayType={'text'} thousandSeparator={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfoView;