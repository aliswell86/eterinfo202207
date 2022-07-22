import React from 'react';
import styles from './WeaponList.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
// import Adsense72890 from 'components/adsense/Adsense72890';
// import Adsense320100 from 'components/adsense/Adsense320100';
import Adsense300600 from 'components/adsense/Adsense300600';
import Adsense300250 from 'components/adsense/Adsense300250';

const cx = classNames.bind(styles);

const WeaponObject = ({id, item_nm, img_src, dmg, item_dtl_dv, speed, tier, size, illegal, history, cnt}) => {
  // const adsenseTag = (cnt !== 0 && cnt % 10 === 0) ? 
  // <div className={cx('weaponlist-adsense')}>
  //   <Adsense72890/>
  //   <Adsense320100/>
  // </div> : '';
    
  return (
    <>
      {/* {adsenseTag} */}
      <div className={cx('weapon-object')}>
        <Link to={`/wp/${id}`} className={cx('weapon-img')}><img src={img_src} alt={item_nm}/></Link>
        <Link to={`/wp/${id}`} className={cx('weapon-name')}>{item_nm}</Link>
        <Link to={`/wp/${id}`} className={cx('weapon-damage')}>
          <NumberFormat value={dmg} displayType={'text'} thousandSeparator={true} prefix={''}/>
        </Link>
        <Link to={`/custom/${id}`} className={cx('weapon-custom-link')}>공격력<br/>계산</Link>
        <Link to={`/wp/${id}`} className={cx('item-option')}>
          <div className={cx('tier')}>{tier}등급</div>
          <div className={cx('item-dtl-dv')}>{item_dtl_dv}</div>
          <div className={cx('size')}>{size ? size : ' '}</div>
          <div className={cx('speed')}>{speed}/1분</div>
          <div className={cx('illegal')}>{illegal === 'Y' ? '불법무기' : ''}</div>
        </Link>
      </div>
    </>
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

  let adsense300600List = [];
  const num = weaponWheres.length % 8;
  
  for(let i=0; i<Math.floor(weaponWheres.length/8); i++) {
    adsense300600List.push(<Adsense300600 key={i}/>);
  }
  if(num > 0 && num < 6) {
    adsense300600List.push(<Adsense300250 key={'Adsense300250_0'}/>);
  }else if(num > 5 && num < 8) {
    adsense300600List.push(<Adsense300250 key={'Adsense300250_1'}/>);
    adsense300600List.push(<Adsense300250 key={'Adsense300250_2'}/>);
  }

  return (
    <div className={cx('weapon')}>
      <div className={cx('weapon-list')}>
        {weaponList}
      </div>      
      {/* <div className={cx('list-adsense')}>
        {adsense300600List}
      </div> */}
    </div>
  )
};

export default WeaponList;
