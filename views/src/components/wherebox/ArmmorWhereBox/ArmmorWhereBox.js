import React from 'react';
import styles from './ArmmorWhereBox.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';
import Checkbox from 'components/common/Checkbox';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const ArmmorWhereBox = ({handleWhereSet, loading, armmorWhere}) => {
  armmorWhere = {clyn: false}
  return (
    <div className={cx('wherebox-adsense')}>
      <Adsense300250/>
      <Adsense320100/>
      <div className={cx('armmor-where-box')}>
        <div className={cx('cl-where')}>
          <div><Radio name='clyn' value='' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.clyn}>전체</Radio></div>
          <div><Radio name='clyn' value='Y' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.clyn}>CL</Radio></div>
          <div><Radio name='clyn' value='N' onChange={handleWhereSet} disabled={loading} defaultValue={armmorWhere.clyn}>NonCL</Radio></div>
        </div>
      </div>
    </div>
  );
};

export default ArmmorWhereBox;