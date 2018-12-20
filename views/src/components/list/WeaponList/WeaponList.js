import React from 'react';
import styles from './WeaponList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const WeaponObject = ({item_nm, dmg, img_src}) => {
  return (
    
    <div className={cx('weapon-object')}>
      <div className={cx('weapon-img')}>
        <img src={img_src} alt={item_nm}/>
      </div>
      <div className={cx('weapon-upgrade-name')}>MAX +8</div>
      <div className={cx('weapon-name')}>{item_nm}</div>
      <div className={cx('weapon-damage')}>{dmg}</div>
      <div className={cx('option-btn')}>
        <div>드롭다운 몸체</div>
        <div>드롭다운 강화</div>
      </div>
    </div>
  );
}

const WeaponList = ({weaponWheres}) => {
  const weaponList = weaponWheres.map((weapon) => {
    const {_id, item_nm, dmg, img_src} = weapon;

    return (
      <WeaponObject
        item_nm={item_nm}
        dmg={dmg}
        img_src={img_src}
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
