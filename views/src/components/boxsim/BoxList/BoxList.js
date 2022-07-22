import React from 'react';
import styles from './BoxList.scss';
import classNames from 'classnames/bind';
import Adsense300250 from 'components/adsense/Adsense300250';

const cx = classNames.bind(styles);

const BoxList = ({boxs, boxInfoList, currCode}) => {  
  const boxList = boxs.map((box) => {
    const {packageCode, packageName, imgSrc} = box;
    const className = currCode !== undefined && currCode === box.packageCode ? '-checked' : '';
    
    return (
      <div className={cx(`box${className}`)} key={packageCode} onClick={() => boxInfoList(packageCode)}>
        <div className={cx('title')}>{packageName}</div>
        <div className={cx('box_img')}>
          <img src={imgSrc} alt={packageName}/>
        </div>
      </div>
    );
  });

  return (
    <div className={cx('box-kinds')}>
      <h2 className={cx('box-kinds-title')}>상자뽑기 시뮬레이션</h2>
      <div className={cx('boxs-adsense')}>
        <div className={cx('boxs')}>
          {boxList}
        </div>
        {/* <Adsense300250/> */}
      </div>
      <div className={cx('notice')}>
        * 불법무기 랜덤상자 결과물에 대한 확률은 공지되어있지 않습니다. 개발자가 임의로 정한 확률입니다.<br/>(8등급: 60%, 9등급: 30%, 10등급:10%)
      </div>
    </div>
  );
};

export default BoxList;