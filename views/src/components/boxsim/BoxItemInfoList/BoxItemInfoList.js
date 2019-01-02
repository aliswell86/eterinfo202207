import React from 'react';
import styles from './BoxItemInfoList.scss';
import classNames from 'classnames/bind';
import ListWrapper from 'components/list/ListWrapper';

const cx = classNames.bind(styles);

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({});
}

const BoxItemInfoList = ({currBox, boxGet, boxResultList}) => {
  const innerStyle = {
    display: !isEmpty(currBox) ? 'block' : 'none'
  }
  const {packageName, itemInfo} = currBox;
  const itemInfoList = itemInfo !== undefined ?  itemInfo.map((item) => {
    const {seq, itemName, luck} = item;
    
    return (
      <div className={cx('box-iteminfo-object')} key={seq}>
        <div className={cx('imgSrc')}><img src='/resource/img/BOX101.gif' alt={itemName}/></div>
        <div className={cx('itemName')}>{itemName}</div>
        <div className={cx('luck')}>{luck.luck}%</div>
      </div>
    )
  }) : '';

  const openList = boxResultList.length > 0 ? boxResultList.map((resultObject, cnt) => {
    const {itemName} = resultObject;
    return (
      <div key={cnt}>{itemName}</div>
    )
  }) : '';
  
  return (
    <div className={cx('box-simul')}>
      <ListWrapper>
        <div className={cx('box-iteminfo')}>
          <div className={cx('box-iteminfo-title')}>{packageName} 아이템 상세목록</div>
          <div className={cx('box-iteminfo-list')}>
            {itemInfoList}
          </div>
        </div>
      </ListWrapper>
      <ListWrapper>
        <div className={cx('box-result')}>
          <div className={cx('box-result-title')}>
            <div className={cx('title-left')}>{packageName} 뽑기</div>
            <div className={cx('title-right')} style={innerStyle}>
              <button name='boxGet1' onClick={() => boxGet('1')}>1개</button>
              <button name='boxGet2' onClick={() => boxGet('10')}>10개</button>
              <button name='boxGet3' onClick={() => boxGet('100')}>100개</button>
            </div>
          </div>
          <div className={cx('box-iteminfo-list')}>
            {openList}
          </div>
        </div>
      </ListWrapper>
    </div>
  );
};

export default BoxItemInfoList;