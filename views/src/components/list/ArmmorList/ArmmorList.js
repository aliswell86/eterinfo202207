import React from 'react';
import styles from './ArmmorList.scss';
import classNames from 'classnames/bind';
import Adsense72890 from 'components/adsense/Adsense72890';
import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const ArmmorObject = ({history, cnt, img_src, item_nm}) => {
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
        <div>{item_nm}</div>
      </div>
      <div>등급</div>
      <div>분류</div>
      <div>방어</div>
      <div>공격</div>
      <div>크리</div>
      <div>체력</div>
      <div>가격</div>
    </div>
   </>
 ) 
}

const ArmmorList = ({armmorWheres, history}) => {
  const armmorList = armmorWheres.map((armmor, cnt) => {
    const {img_src, item_nm} = armmor;

    return (
      <ArmmorObject
      history={history}
      cnt={cnt} item_nm={item_nm}
      img_src={img_src}/>
    )
  });

  return (
    <div className={cx('armmor-list')}>
      <div className={cx('title')}>
        <div>이름</div>
        <div>등급</div>
        <div>분류</div>
        <div>방어</div>
        <div>공격</div>
        <div>크리</div>
        <div>체력</div>
        <div>가격</div>
      </div>
      <div className={cx('list')}>
        {armmorList}
      </div>
    </div>
  );
};

export default ArmmorList;