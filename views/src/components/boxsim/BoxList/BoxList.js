import React from 'react';
import styles from './BoxList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BoxList = ({boxs, boxInfoList, currCode}) => {  
  const boxList = boxs.map((box, cnt) => {
    const {packageCode, packageName, imgSrc} = box;
    const className = currCode !== undefined && Number(currCode) === cnt ? '-checked' : '';
    
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
      <div className={cx('boxs')}>
        {boxList}
      </div>
    </div>
  );
};

export default BoxList;