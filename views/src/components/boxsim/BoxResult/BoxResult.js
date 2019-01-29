import React from 'react';
import styles from './BoxResult.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';
import isEmptyObject from 'is-empty-object';

const cx = classNames.bind(styles);

const BoxResult = ({currBox, boxGet, initialBoxResultList, boxInfoListDisplay, boxResultSearch, boxCnt}) => {
  const {packageCode, packageName, itemInfo, display, cost} = currBox;
  const innerStyle = {display: !isEmptyObject(currBox) ? 'block' : 'none'}
  const innerStyle1 = {display: display}

  let epSum = 0; // 뽑은 ep 합계.
  const itemInfoList = itemInfo !== undefined ?  itemInfo.map((item) => {
    const {seq, itemName, imgSrc, luck, sumValue, _id} = item;
    const sumValueInit = sumValue === undefined ? 0 : sumValue;
    epSum += Number(itemName.substr(0, itemName.indexOf('EP 카드'))) * Number(sumValueInit);
    
    return (
      <div className={cx('box-iteminfo-object')} key={seq} onClick={() => boxResultSearch(_id)}>
        <div className={cx('imgSrc')}><img src={imgSrc} alt={itemName}/></div>
        <div className={cx('itemName')}>{itemName} ({luck.luck}%)</div>
        <div className={cx('sumValue')}>{sumValueInit} 개</div>
      </div>
    )
  }) : '';

  return (
    <div className={cx('box-iteminfo')} onMouseLeave={() => boxResultSearch('init')}>
      <div className={cx('box-iteminfo-title')}>
        <div className={cx('iteminfo-left')}>{packageName} 아이템 상세목록 (결과집계)</div>
        <div className={cx('iteminfo-right')} style={innerStyle}>
          <button name='boxGetInit' onClick={initialBoxResultList}>초기화</button>
          <button name='boxGet1' onClick={() => boxGet('1')}>1개</button>
          <button name='boxGet2' onClick={() => boxGet('10')}>10개</button>
          <button name='boxGet3' onClick={() => boxGet('100')}>100개</button>
          <button name='boxDisplay' onClick={boxInfoListDisplay}>{display === 'none' ? '펼치기' : '닫기'}</button>
        </div>
      </div>
      <div className={cx('title-right')} style={innerStyle}>
        <NumberFormat value={boxCnt * Number(cost)} displayType={'text'} thousandSeparator={true} prefix={''} /> Cash
        {
          packageCode === '6' ?
          <NumberFormat value={epSum} displayType={'text'} thousandSeparator={true} prefix={'('} suffix ={' EP)'}/>
          :
          <NumberFormat value={boxCnt} displayType={'text'} thousandSeparator={true} prefix={'('} suffix ={' 개)'}/>
        }
      </div>
      <div className={cx('box-iteminfo-list')} style={innerStyle1}>
        {itemInfoList}
      </div>
    </div>
  );
};

export default BoxResult;