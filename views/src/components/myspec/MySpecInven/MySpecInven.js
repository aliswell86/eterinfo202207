import React from 'react';
import styles from './MySpecInven.scss';
import classNames from 'classnames/bind';
import { Input } from 'antd';

const cx = classNames.bind(styles);

const MySpecInven = ({myStatInsert, myStat}) => {
  const {mainStat, itemDmgUp, limitDmg} = myStat;
  console.log(myStat);
  return (
    <div className={cx('myspec-inven')}>
      <h2 className={cx('myspec-title')}>세팅상세정보</h2>
      <ul>
        <li>주스탯 : 근거리무기는 체력, 원거리무기는 기술 스탯수치를 입력합니다.</li>
        <li>템상공 : 템에의한 공격력 상승 합계를 입력합니다.(영웅옷28+공토이6+최악풀셋6=40)</li>
        <li>해방공 : 공격력 해방스탯 수치를 입력합니다.</li>
      </ul>
      <div className={cx('spec-dv')}>
        <div className={cx('mystat')}>
          <div>주스탯 <Input type='number' name='mainStat' value={mainStat} onChange={myStatInsert}/></div>
          <div>템상공 <Input type='number' name='itemDmgUp' value={itemDmgUp} onChange={myStatInsert}/></div>
          <div>해방공 <Input type='number' name='limitDmg' value={limitDmg} onChange={myStatInsert}/></div>
        </div>
        <div className={cx('etc-spec')}>
          <div className={cx('b-dv')}>
            <div>일반</div>
            <div>변이</div>
          </div>
          <div className={cx('doping-dv')}>
            <div>노도핑</div>
            <div>일반공앰</div>
            <div>고급공앰</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySpecInven;