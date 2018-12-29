import React, {Fragment} from 'react';
import styles from './WeaponList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import Adsense72890 from 'components/adsense/Adsense72890';

const cx = classNames.bind(styles);

const WeaponObject = ({id, item_nm, img_src, dmg, item_dtl_dv, speed, tier, size, illegal, history, cnt/*, totalCnt*/}) => {
  return (

    (cnt !== 0 && cnt % 5 === 0) ? 
    <Fragment>
      <div className={cx('weapon-list-adsense')}>
        <Adsense72890/>
      </div>
      <div className={cx('weapon-object')} onClick={() => history.push(`/wp/${id}`)}>
        <div className={cx('weapon-img')}>
          <Link to={`/wp/${id}`}>
            <img src={img_src} alt={item_nm}/>
          </Link>
        </div>
        <div className={cx('weapon-name')}><Link to={`/wp/${id}`}>{item_nm}</Link></div>
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
    </Fragment>
    :
    <div className={cx('weapon-object')} onClick={() => history.push(`/wp/${id}`)}>      
      <div className={cx('weapon-img')}>
        <Link to={`/wp/${id}`}>
          <img src={img_src} alt={item_nm}/>
        </Link>
      </div>
      <div className={cx('weapon-name')}><Link to={`/wp/${id}`}>{item_nm}</Link></div>
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

const WeaponList = ({weaponWheres, history}) => {
  const weaponList = weaponWheres.map((weapon, cnt) => {
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
        history={history}
        cnt={cnt}
        totalCnt={weaponWheres.length}/>
    )
  });

  return (
    <div className={cx('weapon-list')}>
      {weaponList}
    </div>
  )
};

export default WeaponList;
