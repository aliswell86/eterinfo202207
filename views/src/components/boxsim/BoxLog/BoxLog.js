import React from 'react';
import styles from './BoxLog.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BoxLog = ({packageName, boxResultListWhere}) => {
  const openList = boxResultListWhere.length > 0 ? boxResultListWhere.map((resultObject, cnt) => {
    const {itemName, luck, resultSeq} = resultObject;
    const special = Number(luck.luck) < 1 ? 'special' : '';
    return (
      <span className={cx(`result-item-object ${special}`)} key={cnt}>no.{resultSeq} {itemName}</span>
    )
  }) : '';
  
  return (
    <div className={cx('box-result')}>
      <h2 className={cx('box-result-title')}>{packageName} 뽑기 기록</h2>
      <div className={cx('box-result-list')}>
        {openList}
      </div>
    </div>
  );
};

export default BoxLog;