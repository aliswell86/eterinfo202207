import React from 'react';
import styles from './WeaponList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const WeaponObject = ({id, item_nm, img_src, dmg, item_dtl_dv, speed, tier, size}) => {
  return (
    
    <div className={cx('weapon-object')}>      
        <div className={cx('weapon-img')}>
          <Link to={`/item/wp/${id}`}>
            <img src={img_src} alt={item_nm}/>
          </Link>
        </div>
        <div className={cx('weapon-name')}><Link to={`/item/wp/${id}`}>{item_nm}</Link></div>
        <div className={cx('weapon-damage')}>
          <NumberFormat value={dmg} displayType={'text'} thousandSeparator={true} prefix={''} />
        </div>
        <div className={cx('item-option')}>
          <div className={cx('tier')}>{tier}등급</div>
          <div className={cx('item-dtl-dv')}>{item_dtl_dv}</div>
          <div className={cx('size')}>{size ? size : ' '}</div>
          <div className={cx('speed')}>{speed}/1분</div>
        </div>
      
    </div>

  );
}

const WeaponList = ({weaponWheres}) => {
  const weaponList = weaponWheres.map((weapon) => {
    const {
      _id, item_nm, img_src, dmg,
      item_dtl_dv, speed, tier, size
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
