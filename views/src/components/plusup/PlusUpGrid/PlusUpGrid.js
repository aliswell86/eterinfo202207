import React from 'react';
import styles from './PlusUpGrid.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const PlusUpGrid = ({loading, wherePlusUpGrid, currPlusUp, costUpdate, plusUpCost}) => {
  const {armmorDv, gradeDv, tierDv, plusUpGridWhere} = currPlusUp;
  let needKitCntAppend = 0;
  const plusUpList = plusUpGridWhere.map((plusup, cnt) => {
    const needKitCnt = Math.pow(2, cnt) * (armmorDv === '0' ? 1 : armmorDv === '1' ? 2 : 6);
    needKitCntAppend += needKitCnt;

    return (
      <div className={cx('plus-up-grid-object')} key={`plusUpObject${cnt}`}>
        <div className={cx('plus-up-text')}>
          <div className={cx('plus-up-grade')}>{`${cnt+1}강`}</div>
          <div className={cx('plus-up-value')}>{plusup}/{(plusup*1.1).toFixed(2)}%</div>
          <div className={cx('plus-up-gitcount')}>
            (<NumberFormat value={needKitCnt} displayType={'text'} thousandSeparator={true}/>/
            <NumberFormat value={needKitCntAppend} displayType={'text'} thousandSeparator={true}/>)
          </div>
        </div>
        <div className={cx('plus-up-cost')}>
          <NumberFormat value={Math.ceil(plusUpCost*needKitCntAppend)} displayType={'text'} thousandSeparator={true} suffix={' 원'}/>
        </div>
      </div>
    );
  });

  return (
    <div className={cx('plusup-grid')}>      
      <h2 class="plusup-title">
        플러스업 종류별 공격력증가율 (<span class="red">NonCL/CL%</span>, 필요완플갯수/누적) 그리고 완플가격계산기
      </h2>
      <div className={cx('plusup-body')}>
        <div className={cx('plusup-grid-head')}>
          <div className={cx('plusup-where')}>
            <div className={cx('armmor-dv')}>
              <div><Radio name='armmorDv' value='0' disabled={loading} onChange={wherePlusUpGrid} defaultValue={armmorDv}>일반</Radio></div>
              <div><Radio name='armmorDv' value='1' disabled={loading} onChange={wherePlusUpGrid} defaultValue={armmorDv}>원피스</Radio></div>
              <div><Radio name='armmorDv' value='2' disabled={loading} onChange={wherePlusUpGrid} defaultValue={armmorDv}>변이</Radio></div>
            </div>
            <div className={cx('grade-dv')}>
              <div><Radio name='gradeDv' value='0' disabled={loading} onChange={wherePlusUpGrid} defaultValue={gradeDv}>장인</Radio></div>
              <div><Radio name='gradeDv' value='1' disabled={loading} onChange={wherePlusUpGrid} defaultValue={gradeDv}>명인</Radio></div>
              <div><Radio name='gradeDv' value='2' disabled={loading} onChange={wherePlusUpGrid} defaultValue={gradeDv}>O.T.</Radio></div>
            </div>
            <div className={cx('tier-dv')} name='tierDv' onChange={wherePlusUpGrid} value={tierDv}>
              <div><Radio name='tierDv' value='0' onChange={wherePlusUpGrid} defaultValue={tierDv}>3급</Radio></div>
              <div><Radio name='tierDv' value='1' onChange={wherePlusUpGrid} defaultValue={tierDv}>4급</Radio></div>
              <div><Radio name='tierDv' value='2' onChange={wherePlusUpGrid} defaultValue={tierDv}>5급</Radio></div>
              <div><Radio name='tierDv' value='3' onChange={wherePlusUpGrid} defaultValue={tierDv}>6급</Radio></div>
              <div><Radio name='tierDv' value='4' onChange={wherePlusUpGrid} defaultValue={tierDv}>7급</Radio></div>
              <div><Radio name='tierDv' value='5' onChange={wherePlusUpGrid} defaultValue={tierDv}>8급</Radio></div>
              <div><Radio name='tierDv' value='6' onChange={wherePlusUpGrid} defaultValue={tierDv}>9급</Radio></div>
              <div><Radio name='tierDv' value='7' onChange={wherePlusUpGrid} defaultValue={tierDv}>10급</Radio></div>
              <div><Radio name='tierDv' value='8' onChange={wherePlusUpGrid} defaultValue={tierDv}>11급</Radio></div>
            </div>
            <div className={cx('cost')}>
              <div>완플가격(원)</div>
              <div><input type='number' name='plusUpCost' value={plusUpCost} onClick={inputClick} onChange={costUpdate}/></div>
            </div>
          </div>
        </div>      
        <div className={cx('plus-up-grid-list')}>
          {plusUpList}
        </div>
      </div>
    </div>
  );
};

export default PlusUpGrid;

const inputClick = (e) => {
  e.target.select();
}