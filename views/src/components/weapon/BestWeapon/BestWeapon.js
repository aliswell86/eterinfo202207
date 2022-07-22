import React from 'react';
import styles from './BestWeapon.scss';
import classNames from 'classnames/bind';
import Adsense320100 from 'components/adsense/Adsense320100';
import Adsense970250 from 'components/adsense/Adsense970250';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const HistListObject = ({date, rank, count}) => {

  return (
    <div className={cx('hist-object')}>
      <div className={cx('date')}>{dateFormat(date, '/')}</div>
      <div className={cx('rank')}>{rank}</div>
      <div className={cx('count')}>
        <NumberFormat value={count} displayType={'text'} thousandSeparator={true} suffix={'건'}/>
      </div>
    </div>
  )
}

const BestItemObject = ({period, item_nm, img_src, id, count, cnt, bestWeaponHistView}) => {
  const adsenseTag = (cnt === 0) ? <div>1위 ~ 5위</div> : 
  (cnt % 5 === 0) ? <><div>{cnt+1}위 ~ {cnt+5}위</div></> : '';

  return (
    <>
      {adsenseTag}      
      <div className={cx('object')} key={cnt} onMouseOver={bestWeaponHistView} weapon_id={id} period={period}>
        <Link to={`/wp/${id}`} className={cx('weapon-img')}><img src={img_src} alt={item_nm} weapon_id={id} period={period}/></Link>
        <Link to={`/wp/${id}`} className={cx('weapon-name')} weapon_id={id} period={period}>{item_nm}</Link>
        <Link to={`/wp/${id}`} className={cx('weapon-count')} weapon_id={id} period={period}>
          <NumberFormat value={count} displayType={'text'} thousandSeparator={true} suffix={'건'}/>
        </Link>
      </div>
    </>
  )
}

const BestWeapon = ({bestItems, bestWeaponHistView, bestWeaponPop}) => {
  const histPopStyle = {
    top: bestWeaponPop.top + 'px',
    left: bestWeaponPop.left + 'px',
    display: bestWeaponPop.display
  };
  const {day, week, month} = bestItems;

  const histList = bestWeaponPop.currPopHist.length === 0 ? <div style={{textAlign: 'center'}}>첫진입</div> : 
  bestWeaponPop.currPopHist.map((item, cnt) => {
    const {date, rank, count} = item;

    return (
      <HistListObject date={date} rank={rank} count={count} key={cnt}/>
    )
  })


  const dayList = day.info.map((item, cnt) => {
    const {item_nm, img_src, weaponId, count} = item;
    
    return (
      <BestItemObject period={'day'} item_nm={item_nm} img_src={img_src} id={weaponId} count={count} cnt={cnt} key={cnt} bestWeaponHistView={bestWeaponHistView}/>
    )
  });

  const weekList = week.info.map((item, cnt) => {
    const {item_nm, img_src, weaponId, count} = item;
    
    return (
      <BestItemObject period={'week'} item_nm={item_nm} img_src={img_src} id={weaponId} count={count} cnt={cnt} key={cnt} bestWeaponHistView={bestWeaponHistView}/>
    )
  });

  const monthList = month.info.map((item, cnt) => {
    const {item_nm, img_src, weaponId, count} = item;
    
    return (
      <BestItemObject period={'month'} item_nm={item_nm} img_src={img_src} id={weaponId} count={count} cnt={cnt} key={cnt} bestWeaponHistView={bestWeaponHistView}/>
    )
  });

  return (
    <>
      <div className={cx('init')}>
        {/* <a href='/api/auth/gapageview'>갱신</a> */}
        <h2 className={cx('title')}>이터인포에서 많이찾는 무기 BEST20</h2>
        <div>기간별 이터인포 무기조회 건수합계입니다. 하루마다 갱신됩니다. 이터널시티 유저들에게 인기가 많은 무기는 뭘까요!?</div>
      </div>
      {/* <Adsense970250/> */}
      <div className={cx('best-weapon')}>
        <div className={cx('best-weapon-hist')} style={histPopStyle}>
          <div className={cx('hist-object-title')}>
            <div className={cx('date')}>날짜</div>
            <div className={cx('rank')}>순위</div>
            <div className={cx('count')}>조회수</div>
          </div>
          {histList}
        </div>
        <div className={cx('best')}>
          <h2 className={cx('title')}>일간 ({dateFormat(day.min_date, '-')} ~ {dateFormat(day.max_date, '-')})</h2>
          <div className={cx('list')}>{dayList}</div>
        </div>
        <div className={cx('best')}>
          <h2 className={cx('title')}>주간 ({dateFormat(week.min_date, '-')} ~ {dateFormat(week.max_date, '-')})</h2>
          <div className={cx('list')}>{weekList}</div>
        </div>
        <div className={cx('best')}>
          <h2 className={cx('title')}>월간 ({dateFormat(month.min_date, '-')} ~ {dateFormat(month.max_date, '-')})</h2>
          <div className={cx('list')}>{monthList}</div>
        </div>
      </div>
    </>
  );
};

export default BestWeapon;

const dateFormat = (date, dot) => {
  if(!date) return '';

  const yy = date.substr(2, 2);
  const mm = date.substr(4, 2);
  const dd = date.substr(6, 2);

  return yy+dot+mm+dot+dd;
}