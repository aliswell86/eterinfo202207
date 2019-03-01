import React from 'react';
import styles from './BestWeapon.scss';
import classNames from 'classnames/bind';
import Adsense320100 from 'components/adsense/Adsense320100';
import Adsense970250 from 'components/adsense/Adsense970250';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const BestItemObject = ({item_nm, img_src, id, count, cnt}) => {
  const adsenseTag = (cnt === 0) ? <div>1위 ~ 5위</div> : 
  (cnt % 5 === 0) ? <><Adsense320100/><div>{cnt+1}위 ~ {cnt+5}위</div></> : '';

  return (
    <>
      {adsenseTag}      
      <div className={cx('object')} key={cnt}>
        <Link to={`/wp/${id}`} className={cx('weapon-img')}><img src={img_src} alt={item_nm}/></Link>
        <Link to={`/wp/${id}`} className={cx('weapon-name')}>{item_nm}</Link>
        <Link to={`/wp/${id}`} className={cx('weapon-count')}>
          <NumberFormat value={count} displayType={'text'} thousandSeparator={true} suffix={'건'}/>
        </Link>
      </div>
    </>
  )
}

const BestWeapon = ({bestItems}) => {
  const {day, week, month} = bestItems;
  const dayList = day.info.map((item, cnt) => {
    const {item_nm, img_src, weaponId, count} = item;
    
    return (
      <BestItemObject item_nm={item_nm} img_src={img_src} id={weaponId} count={count} cnt={cnt} key={cnt}/>
    )
  });

  const weekList = week.info.map((item, cnt) => {
    const {item_nm, img_src, weaponId, count} = item;
    
    return (
      <BestItemObject item_nm={item_nm} img_src={img_src} id={weaponId} count={count} cnt={cnt} key={cnt}/>
    )
  });

  const monthList = month.info.map((item, cnt) => {
    const {item_nm, img_src, weaponId, count} = item;
    
    return (
      <BestItemObject item_nm={item_nm} img_src={img_src} id={weaponId} count={count} cnt={cnt} key={cnt}/>
    )
  });

  return (
    <>
      <div className={cx('init')}>
        {/* <a href='/api/auth/gapageview'>갱신</a> */}
        <h2 className={cx('title')}>이터인포에서 많이찾는 무기 BEST20</h2>
        <div>기간별 이터인포 무기조회 건수합계입니다. 하루마다 갱신됩니다. 이터널시티 유저들에게 인기가 많은 무기는 뭘까요!?</div>
      </div>
      <Adsense970250/>
      <div className={cx('best-weapon')}>
        <div className={cx('best')}>
          <h2 className={cx('title')}>일간 ({dateFormat(day.min_date)} ~ {dateFormat(day.max_date)})</h2>
          <div className={cx('list')}>{dayList}</div>
        </div>
        <div className={cx('best')}>
          <h2 className={cx('title')}>주간 ({dateFormat(week.min_date)} ~ {dateFormat(week.max_date)})</h2>
          <div className={cx('list')}>{weekList}</div>
        </div>
        <div className={cx('best')}>
          <h2 className={cx('title')}>월간 ({dateFormat(month.min_date)} ~ {dateFormat(month.max_date)})</h2>
          <div className={cx('list')}>{monthList}</div>
        </div>
      </div>
    </>
  );
};

export default BestWeapon;

const dateFormat = (date) => {
  if(!date) return '';

  const yy = date.substr(2, 2);
  const mm = date.substr(4, 2);
  const dd = date.substr(6, 2);

  return yy+'/'+mm+'/'+dd;
}