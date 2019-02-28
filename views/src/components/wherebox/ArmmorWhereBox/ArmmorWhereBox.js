import React from 'react';
import styles from './ArmmorWhereBox.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';
import Checkbox from 'components/common/Checkbox';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const ArmmorWhereBox = ({handleWhereSet, loading, armmorWhere}) => {
  return (
    <div className={cx('wherebox-adsense')}>
      <div className={cx('armmor-where-box')}>
        <div className={cx('cl-where')}>
          <div><Radio name='clyn' value='' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.clyn}>전체</Radio></div>
          <div><Radio name='clyn' value='Y' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.clyn}>CL</Radio></div>
          <div><Radio name='clyn' value='N' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.clyn}>NonCL</Radio></div>
        </div>
        <div className={cx('stype2-where')}>
          <div><Radio name='stype2' value='' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.stype2}>전체</Radio></div>
          <div><Radio name='stype2' value='1' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.stype2}>남자전용</Radio></div>
          <div><Radio name='stype2' value='2' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.stype2}>여자전용</Radio></div>
        </div>
        <div className={cx('armmor-type-where')}>
          <div><Checkbox name="isType1" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isType1}>상의</Checkbox></div>
          <div><Checkbox name="isType2" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isType2}>하의</Checkbox></div>
          <div><Checkbox name="isType3" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isType3}>코트</Checkbox></div>
          <div><Checkbox name="isType4" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isType4}>모자</Checkbox></div>
          <div><Checkbox name="isType5" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isType5}>신발</Checkbox></div>
          <div><Checkbox name="isType6" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isType6}>가발</Checkbox></div>
          <div><Checkbox name="isType7" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isType7}>방패</Checkbox></div>
        </div>
        <div className={cx('grade-where')}>
          <div><Checkbox name="isTier1" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier1}>1등급</Checkbox></div>
          <div><Checkbox name="isTier2" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier2}>2등급</Checkbox></div>
          <div><Checkbox name="isTier3" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier3}>3등급</Checkbox></div>
          <div><Checkbox name="isTier4" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier4}>4등급</Checkbox></div>
          <div><Checkbox name="isTier5" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier5}>5등급</Checkbox></div>
          <div><Checkbox name="isTier6" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier6}>6등급</Checkbox></div>
          <div><Checkbox name="isTier7" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier7}>7등급</Checkbox></div>
          <div><Checkbox name="isTier8" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier8}>8등급</Checkbox></div>
          <div><Checkbox name="isTier9" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier9}>9등급</Checkbox></div>
          <div><Checkbox name="isTier10" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier10}>10등급</Checkbox></div>
          <div><Checkbox name="isTier11" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier11}>11등급</Checkbox></div>
          <div><Checkbox name="isTier12" onChange={handleWhereSet} disabled={loading} checked={armmorWhere.isTier12}>12등급</Checkbox></div>
        </div>
      </div>
      <Adsense300250/>
      <Adsense320100/>
    </div>
  );
};

export default ArmmorWhereBox;