import React from 'react';
import styles from './DPSSimul.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';

const cx = classNames.bind(styles);

const DPSSimul = ({setDPSOption, currHeadCounterValue, currHeadCounterList, currFireValue, currFireList}) => {
  const hcOptionList = currHeadCounterList.map(option => {
    const {seq, description} = option;
    
    return (
      <div key={seq}>
        <Radio name='currHeadCounterValue' value={seq} onChange={setDPSOption} defaultValue={currHeadCounterValue}>
          {description}
        </Radio>
      </div>
    )
  });
  
  const frOptionList = currFireList.map(option => {
    const {seq, description} = option;
    
    return (
      <div key={seq}>
        <Radio name='currFireValue' value={seq} onChange={setDPSOption} defaultValue={currFireValue}>
          {description}
        </Radio>
      </div>
    )
  });

  return (
    <div className={cx('dps-simul')}>
      <h2 className={cx('dps-simul-title')}>DPS측정</h2>
      <div className={cx('dps-simul-body')}>
        <div className={cx('option-select')}>
          <div className={cx('headshot-option')}>
            <div className={cx('headshot-option-title')}>헤드샷(카운터) 설정</div>
            <div className={cx('headshot-option-body')}>
              {hcOptionList}
            </div>
          </div>
          <div className={cx('fire-option')}>
            <div className={cx('fire-option-title')}>발화 설정</div>
            <div className={cx('fire-option-body')}>
              {frOptionList}
            </div>
          </div>
        </div>
        <div className={cx('monster-view-info')}>
          <div className={cx('monster-con')}> </div>
          <div className={cx('monster-con-cover')}>100,000,000</div>
          <div className={cx('monster-view')}>
            <img src='/resource/img/monster1.gif' alt='두꺼비'/>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default DPSSimul;