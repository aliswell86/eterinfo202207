import React from 'react';
import styles from './AccessoryList.scss';
import classNames from 'classnames/bind';
// import Adsense72890 from 'components/adsense/Adsense72890';
// import Adsense320100 from 'components/adsense/Adsense320100';
import Adsense300600 from 'components/adsense/Adsense300600';
import Adsense300250 from 'components/adsense/Adsense300250';

const cx = classNames.bind(styles);

const AccessoryObject = ({history, cnt, img_src, item_nm, tier, item_dtl_dv, dfs, dmg, cri, con, key}) => {
  // const adsenseTag = (cnt !== 0 && cnt % 5 === 0) ? 
  // <div className={cx('accessorylist-adsense')}>
  //   <Adsense72890/>
  //   <Adsense320100/>
  // </div> : '';

 return (
   <>
    {/* {adsenseTag} */}
    <div className={cx('accessory-object')}>
      <div className={cx('name')}>
        <div className={cx('accessory-img')}><img src={img_src} alt={item_nm}/></div>
        <div className={cx('accessory-name')}>{item_nm}</div>
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

const AccessoryList = ({accessoryWheres}) => {
  const accessoryList = accessoryWheres.map((accessory, cnt) => {
    const {img_src, item_nm, tier, item_dtl_dv, dfs, dmg, cri, con, _id} = accessory;

    return (
      <AccessoryObject
      cnt={cnt} item_nm={item_nm}
      img_src={img_src}
      tier={tier}
      item_dtl_dv={item_dtl_dv}
      dfs={dfs} dmg={dmg} cri={cri} con={con}
      key={_id}
      />
    )
  });

  let adsense300600List = [];
  const num = accessoryWheres.length % 8;
  
  for(let i=0; i<Math.floor(accessoryWheres.length/8); i++) {
    adsense300600List.push(<Adsense300600 key={i}/>);
  }
  if(num > 0 && num < 6) {
    adsense300600List.push(<Adsense300250 key={'Adsense300250_0'}/>);
  }else if(num > 5 && num < 8) {
    adsense300600List.push(<Adsense300250 key={'Adsense300250_1'}/>);
    adsense300600List.push(<Adsense300250 key={'Adsense300250_2'}/>);
  }

  return (
    <div className={cx('accessory')}>
      <div className={cx('accessory-list')}>
        {accessoryList}
      </div>
      <div className={cx('list-adsense')}>
        {/* {adsense300600List} */}
      </div>
    </div>
  );
};

export default AccessoryList;