import React from 'react';
import styles from './WeaponListCustom.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const WeaponObject = ({id, item_nm, img_src, dmg, item_dtl_dv, speed, tier, size, illegal, getWeaponView}) => {
  
  return (
    
    <div className={cx('weapon-object')} onClick={() => getWeaponView(id)}>
      <div className={cx('weapon-img')}>
        <img src={img_src} alt={item_nm}/>
      </div>
      <div className={cx('weapon-name')}>{item_nm}</div>
      <div className={cx('weapon-damage')}>
        <NumberFormat value={dmg} displayType={'text'} thousandSeparator={true} prefix={''} />
      </div>
      <div className={cx('item-option')}>
        <div className={cx('tier')}>{tier}등급</div>
        <div className={cx('item-dtl-dv')}>{item_dtl_dv}</div>
        <div className={cx('size')}>{size ? size : ' '}</div>
        <div className={cx('speed')}>{speed}/1분</div>
        <div className={cx('illegal')}>{illegal === 'Y' ? '불법무기' : ''}</div>
      </div>
    </div>

  );
}

const WeaponListCustom = ({weaponWheres, getWeaponView}) => {  
  const weaponList = weaponWheres.map((weapon) => {
    const {
      _id, item_nm, img_src, dmg,
      item_dtl_dv, speed, tier, size, illegal
    } = weapon;

    return (
      <WeaponObject
        item_nm={item_nm}
        img_src={img_src}
        dmg={dmg}
        item_dtl_dv={item_dtl_dv}
        tier={tier}
        speed={speed}
        size={size}
        illegal={illegal}
        key={_id}
        id={_id}
        getWeaponView={getWeaponView}/>
    )
  });

  return (
    <div className={cx('custom-list-wrapper')}>
      <h2 className={cx('weapon-custom-title')}>무기선택 리스트</h2>
      <div className={cx('weapon-list-custom')}>      
        {weaponList}
      </div>
    </div>
  )
};

export default WeaponListCustom;
