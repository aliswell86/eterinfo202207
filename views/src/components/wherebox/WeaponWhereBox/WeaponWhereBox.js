import React from 'react';
import styles from './WeaponWhereBox.scss';
import classNames from 'classnames/bind';

import { Checkbox, Radio } from 'antd';
const RadioGroup = Radio.Group;

const cx = classNames.bind(styles);

const WeaponWhereBox = ({handleWhereSet, loading}) => {

  return (
    <div className={cx('weapon-where-box')}>
      <div className={cx('cl-where')}>
        <RadioGroup className={cx('clyn')} name='clyn' onChange={handleWhereSet}>
          <div><Radio value='' disabled={loading}>전체 </Radio></div>
          <div><Radio value='Y' disabled={loading}>CL</Radio></div>
          <div><Radio value='N' disabled={loading}>NonCL</Radio></div>
        </RadioGroup>
      </div>
      <div className={cx('weapon-illegal-where')}>
        <RadioGroup className={cx('illegal')} name='illegal' onChange={handleWhereSet}>
          <div><Radio value='' disabled={loading}>전체</Radio></div>
          <div><Radio value='Y' disabled={loading}>불법무기</Radio></div>
          <div><Radio value='N' disabled={loading}>합법무기</Radio></div>
        </RadioGroup>
      </div>
      <div className={cx('weapon-type-where')}>
      <div className={cx('weapon-type1')}>
          <div><Checkbox name="isType1" onChange={handleWhereSet} disabled={loading}>저격소총</Checkbox></div>
          <div><Checkbox name="isType2" onChange={handleWhereSet} disabled={loading}>돌격소총</Checkbox></div>
          <div><Checkbox name="isType3" onChange={handleWhereSet} disabled={loading}>기관총</Checkbox></div>
          <div><Checkbox name="isType4" onChange={handleWhereSet} disabled={loading}>중화기</Checkbox></div>
          <div><Checkbox name="isType5" onChange={handleWhereSet} disabled={loading}>지원화기</Checkbox></div>
          <div><Checkbox name="isType6" onChange={handleWhereSet} disabled={loading}>샷건</Checkbox></div>
          <div><Checkbox name="isType7" onChange={handleWhereSet} disabled={loading}>권총</Checkbox></div>
          <div><Checkbox name="isType8" onChange={handleWhereSet} disabled={loading}>특수화기</Checkbox></div>
        </div>
        <div className={cx('weapon-type2')}>
          <div><Checkbox name="isType9" onChange={handleWhereSet} disabled={loading}>도검</Checkbox></div>
          <div><Checkbox name="isType10" onChange={handleWhereSet} disabled={loading}>둔기</Checkbox></div>
          <div><Checkbox name="isType11" onChange={handleWhereSet} disabled={loading}>도끼</Checkbox></div>
          <div><Checkbox name="isType12" onChange={handleWhereSet} disabled={loading}>장창</Checkbox></div>
          <div><Checkbox name="isType13" onChange={handleWhereSet} disabled={loading}>미늘창</Checkbox></div>
        </div>
      </div>
      <div className={cx('grade-where')}>
        <div><Checkbox name="isTier1" onChange={handleWhereSet} disabled={loading}>1등급</Checkbox></div>
        <div><Checkbox name="isTier2" onChange={handleWhereSet} disabled={loading}>2등급</Checkbox></div>
        <div><Checkbox name="isTier3" onChange={handleWhereSet} disabled={loading}>3등급</Checkbox></div>
        <div><Checkbox name="isTier4" onChange={handleWhereSet} disabled={loading}>4등급</Checkbox></div>
        <div><Checkbox name="isTier5" onChange={handleWhereSet} disabled={loading}>5등급</Checkbox></div>
        <div><Checkbox name="isTier6" onChange={handleWhereSet} disabled={loading}>6등급</Checkbox></div>
        <div><Checkbox name="isTier7" onChange={handleWhereSet} disabled={loading}>7등급</Checkbox></div>
        <div><Checkbox name="isTier8" onChange={handleWhereSet} disabled={loading}>8등급</Checkbox></div>
        <div><Checkbox name="isTier9" onChange={handleWhereSet} disabled={loading}>9등급</Checkbox></div>
        <div><Checkbox name="isTier10" onChange={handleWhereSet} disabled={loading}>10등급</Checkbox></div>
        <div><Checkbox name="isTier11" onChange={handleWhereSet} disabled={loading}>11등급</Checkbox></div>
        <div><Checkbox name="isTier12" onChange={handleWhereSet} disabled={loading}>12등급</Checkbox></div>
      </div>
    </div>
  );
};

export default WeaponWhereBox;