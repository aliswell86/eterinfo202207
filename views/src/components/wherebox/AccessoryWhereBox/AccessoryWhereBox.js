import React from 'react';
import styles from './AccessoryWhereBox.scss';
import classNames from 'classnames/bind';
import Checkbox from 'components/common/Checkbox';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const AccessoryWhereBox = ({handleWhereSet, loading, accessoryWhere}) => {
  return (
    <div className={cx('wherebox-adsense')}>
      <div className={cx('accessory-where-box')}>
        <div className={cx('accessory-type-where')}>
        <div><Checkbox name="isCtype5" onChange={handleWhereSet} disabled={loading} checked={accessoryWhere.isCtype5}>토이</Checkbox></div>
        <div><Checkbox name="isCtype6" onChange={handleWhereSet} disabled={loading} checked={accessoryWhere.isCtype6}>벨트</Checkbox></div>
        <div><Checkbox name="isCtype7" onChange={handleWhereSet} disabled={loading} checked={accessoryWhere.isCtype7}>귀걸이</Checkbox></div>
        <div><Checkbox name="isCtype8" onChange={handleWhereSet} disabled={loading} checked={accessoryWhere.isCtype8}>목걸이</Checkbox></div>
        <div><Checkbox name="isCtype9" onChange={handleWhereSet} disabled={loading} checked={accessoryWhere.isCtype9}>팔찌</Checkbox></div>
        <div><Checkbox name="isCtype10" onChange={handleWhereSet} disabled={loading} checked={accessoryWhere.isCtype10}>반지</Checkbox></div>
        <div><Checkbox name="isCtype11" onChange={handleWhereSet} disabled={loading} checked={accessoryWhere.isCtype11}>왼손반지</Checkbox></div>
        <div><Checkbox name="isCtype12" onChange={handleWhereSet} disabled={loading} checked={accessoryWhere.isCtype12}>환생악세</Checkbox></div>
        </div>
      </div>
      <Adsense300250/>
      <Adsense320100/>
    </div>
  );
};

export default AccessoryWhereBox;