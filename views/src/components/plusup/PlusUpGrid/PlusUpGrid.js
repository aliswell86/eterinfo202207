import React from 'react';
import styles from './PlusUpGrid.scss';
import classNames from 'classnames/bind';
import { Radio } from 'antd';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense72890 from 'components/adsense/Adsense72890';

const cx = classNames.bind(styles);
const RadioGroup = Radio.Group;

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
          <RadioGroup className={cx('armmor-dv')} name='armmorDv' onChange={wherePlusUpGrid} value={armmorDv}>
            <div><Radio value='0' disabled={loading}>일반</Radio></div>
            <div><Radio value='1' disabled={loading}>원피스</Radio></div>
            <div><Radio value='2' disabled={loading}>변이</Radio></div>
          </RadioGroup>
          <RadioGroup className={cx('grade-dv')} name='gradeDv' onChange={wherePlusUpGrid} value={gradeDv}>
            <div><Radio value='0' disabled={loading}>장인</Radio></div>
            <div><Radio value='1' disabled={loading}>명인</Radio></div>
            <div><Radio value='2' disabled={loading}>O.T.</Radio></div>
          </RadioGroup>
          <RadioGroup className={cx('tier-dv')} name='tierDv' onChange={wherePlusUpGrid} value={tierDv}>
            <div><Radio value='0' disabled={loading}>3급</Radio></div>
            <div><Radio value='1' disabled={loading}>4급</Radio></div>
            <div><Radio value='2' disabled={loading}>5급</Radio></div>
            <div><Radio value='3' disabled={loading}>6급</Radio></div>
            <div><Radio value='4' disabled={loading}>7급</Radio></div>
            <div><Radio value='5' disabled={loading}>8급</Radio></div>
            <div><Radio value='6' disabled={loading}>9급</Radio></div>
            <div><Radio value='7' disabled={loading}>10급</Radio></div>
            <div><Radio value='8' disabled={loading}>11급</Radio></div>
          </RadioGroup>
        </div>
      </div>      
      <div className={cx('plus-up-grid-list')}>
        {plusUpList}
      </div>
      <div className={cx('plusup-grid-adsense')}>
        <Adsense300250/>
        <Adsense72890/>
      </div>
    </div>
  );
};

export default PlusUpGrid;