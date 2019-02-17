import React from 'react';
import styles from './ArmmorList.scss';
import classNames from 'classnames/bind';
import Adsense72890 from 'components/adsense/Adsense72890';
import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const ArmmorObject = ({history, cnt, img_src, item_nm, tier, item_dtl_dv, dfs, dmg, cri, con, key}) => {
  const adsenseTag = (cnt !== 0 && cnt % 5 === 0) ? 
  <div className={cx('armmorlist-adsense')}>
    <Adsense72890/>
    <Adsense320100/>
  </div> : '';

 return (
   <>
    {adsenseTag}
    <div className={cx('armmor-object')} onClick={() => history.push('/plusup')}>
      <div className={cx('name')}>
        <div className={cx('armmor-img')}><img src={img_src} alt={item_nm}/></div>
        <div className={cx('armmor-name')}>{item_nm}</div>
      </div>
      <div className={cx('tier')}>{tier}등급</div>
      <div className={cx('item-dtl-dv')}>{item_dtl_dv}</div>
      <div className={cx('stat')}>
        <div className={cx('stat-title')}>
          <div>방어</div>
          <div>공격</div>
          <div>크리</div>
          <div>체력</div>
        </div>
        <div className={cx('stat-content')}>
          <div className={cx('dfs')}>{dfs}</div>
          <div className={cx('dmg')}>{dmg}</div>
          <div className={cx('cri')}>{cri}</div>
          <div className={cx('con')}>{con}</div>
        </div>
      </div>
    </div>
   </>
 ) 
}

const ArmmorList = ({armmorWheres, history}) => {
  const armmorList = armmorWheres.map((armmor, cnt) => {
    const {img_src, item_nm, tier, item_dtl_dv, dfs, dmg, cri, con, _id} = armmor;

    return (
      <ArmmorObject
      history={history}
      cnt={cnt} item_nm={item_nm}
      img_src={img_src}
      tier={tier}
      item_dtl_dv={item_dtl_dv}
      dfs={dfs} dmg={dmg} cri={cri} con={con}
      key={_id}
      />
    )
  });

  return (
    <div className={cx('armmor-list')}>
      {armmorList}
    </div>
  );
};

export default ArmmorList;