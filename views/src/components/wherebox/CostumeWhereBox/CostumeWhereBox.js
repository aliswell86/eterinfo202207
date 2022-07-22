import React from 'react';
import styles from './CostumeWhereBox.scss';
import classNames from 'classnames/bind';
import Checkbox from 'components/common/Checkbox';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const CostumeWhereBox = ({handleWhereSet, loading, costumeWhere}) => {
  return (
    <div className={cx('wherebox-adsense')}>
      <div className={cx('costume-where-box')}>
        <div className={cx('type-where')}>
          <div><Checkbox name="isCtype3" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isCtype3}>코스튬</Checkbox></div>
          <div><Checkbox name="isCtype4" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isCtype4}>날개</Checkbox></div>
        </div>
        <div className={cx('type-where')}>
          <div><Checkbox name="isStype21" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isStype21}>남자전용</Checkbox></div>
          <div><Checkbox name="isStype22" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isStype22}>여자전용</Checkbox></div>
        </div>
        <div className={cx('grade-where')}>
          <div><Checkbox name="isTier1" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier1}>노강</Checkbox></div>
          <div><Checkbox name="isTier2" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier2}>1강</Checkbox></div>
          <div><Checkbox name="isTier3" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier3}>2강</Checkbox></div>
          <div><Checkbox name="isTier4" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier4}>3강</Checkbox></div>
          <div><Checkbox name="isTier5" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier5}>4강</Checkbox></div>
          <div><Checkbox name="isTier6" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier6}>5강</Checkbox></div>
          <div><Checkbox name="isTier7" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier7}>6강</Checkbox></div>
          <div><Checkbox name="isTier8" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier8}>7강</Checkbox></div>
          <div><Checkbox name="isTier9" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier9}>8강</Checkbox></div>
          <div><Checkbox name="isTier10" onChange={handleWhereSet} disabled={loading} checked={costumeWhere.isTier10}>9강</Checkbox></div>
        </div>
      </div>
      {/* <Adsense300250/>
      <Adsense320100/> */}
    </div>
  );
};

export default CostumeWhereBox;