import React from 'react';
import styles from './PlusUpGrid.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';

const cx = classNames.bind(styles);

const PlusUpGrid = ({loading, wherePlusUpGrid, currPlusUp}) => {
  const {armmorDv, gradeDv, tierDv, plusUpGridWhere} = currPlusUp;
  const plusUpList = plusUpGridWhere.map((plusup, cnt) => {
    return (
      <div className={cx('plus-up-grid-object')} key={`plusUpObject${cnt}`}>
        <div className={cx('plus-up-text')}>
          <div className={cx('plus-up-grade')}>{`${cnt+1}강`}</div>
          <div className={cx('plus-up-value')}>{plusup}%</div>
        </div>
      </div>
    );
  });

  return (
    <div className={cx('plusup-grid')}>
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
        </div>
      </div>      
      <div className={cx('plus-up-grid-list')}>
        {plusUpList}
      </div>
    </div>
  );
};

export default PlusUpGrid;