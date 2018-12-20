import React from 'react';
import styles from './WeaponList.scss';
import classNames from 'classnames/bind';
import { Button } from 'antd';

const cx = classNames.bind(styles);

const WeaponObject = ({item_nm, img_src, dmg, item_dtl_dv, cri, accuracy_rate, point_rate, speed, tier, size, cost}) => {
  return (
    
    <div className={cx('weapon-object')}>
      <div className={cx('weapon-img')}>
        <img src={img_src} alt={item_nm}/>
      </div>
      <div className={cx('weapon-name')}>{item_nm}</div>      
      <div className={cx('weapon-damage')}>파괴력:{dmg}</div>
      <div className={cx('item-option')}>
        <div className={cx('tier')}>등급:{tier}</div>
        <div className={cx('item-dtl-dv')}>종류:{item_dtl_dv}</div>
        <div className={cx('speed')}>속도:{speed}</div>
        <div className={cx('size')}>크기:{size}</div>
      </div>
    </div>

  );
}

const WeaponList = ({weaponWheres}) => {
  const weaponList = weaponWheres.map((weapon) => {
    const {
      _id, item_nm, img_src, dmg,
      item_dtl_dv, cri, accuracy_rate, point_rate, speed, tier, size, cost
    } = weapon;

    return (
      <WeaponObject
        item_nm={item_nm}
        img_src={img_src}
        dmg={dmg}
        item_dtl_dv={item_dtl_dv}
        cri={cri}
        accuracy_rate={accuracy_rate}
        point_rate={point_rate}
        tier={tier}
        speed={speed}
        size={size}
        cost={cost}
        key={_id}
        id={_id}/>
    )
  });

  return (
    <div className={cx('weapon-list')}>
      {weaponList}
    </div>
  )
};

export default WeaponList;
