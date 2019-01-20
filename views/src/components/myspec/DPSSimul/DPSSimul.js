import React from 'react';
import styles from './DPSSimul.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const DPSSimul = ({setDPSOption, currHeadCounterValue, currHeadCounterList, currFireValue, currFireList, huntStart, huntSecond, huntStop, dmgRandom, dmgRandomSum, fireUse, fireCoolTime, fireUseTime, inputClick, monsterCon, monsterExp, huntStartBool}) => {
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

  const conCoverWidth = Math.floor((monsterCon - dmgRandomSum)/monsterCon*100);
  const conCoverStyle = {
    width: `${conCoverWidth}%`
  }

  return (
    <div className={cx('dps-simul')}>
      <h2 className={cx('dps-simul-title')}>DPS측정{huntStartBool ? '(사냥중..)' : ''}</h2>
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
          <div className={cx('shot-btns')}>
            <button onClick={huntStart}>사냥<br/>시작</button>
            <button onClick={huntStop}>사냥<br/>중단</button>
          </div>
        </div>

        <div className={cx('dps-info')}>
          <div className={cx('hunt-title')}>사냥시간</div>
          <div className={cx('hunt-second')}>{huntSecond} sec</div>
          <div className={cx('firecool-title')}>발화쿨/지속</div>
          <div className={cx('firecool-second')}>
            {currFireValue === '2' || currFireValue === '4' ? '-' : `${fireCoolTime}/${fireUseTime}/${fireUse ? 'ON' : 'OFF'}`}
          </div>
          <div className={cx('dmg-list')}>{dmgRandom.dmg}</div>
        </div>

        <div className={cx('monster-view-info')}>
          <div className={cx('monster-con')}>
            <span className={cx('monster-connum')}>
              <NumberFormat value={monsterCon - dmgRandomSum} displayType={'text'} thousandSeparator={true}/>
              (<NumberFormat value={((monsterCon - dmgRandomSum)/monsterCon*100).toFixed(2)} displayType={'text'} thousandSeparator={true}/>%)
            </span>
          </div>
          <div className={cx('monster-con-cover')} style={conCoverStyle}> </div>
          <div className={cx('monster-view')}>
            <img src='/resource/img/monster1.gif' alt='두꺼비'/>
          </div>
          <div className={cx('monster-con-exp')}>
            <div>
              <div className={cx('monster-con-in')}>
                몹체력(<NumberFormat value={(monsterCon/100000000).toFixed(2)} displayType={'text'} thousandSeparator={true}/>억)
              </div>
              <div><input type='number' name='monsterCon' value={monsterCon} onChange={setDPSOption} onClick={inputClick}/></div>
            </div>
            <div>
              <div className={cx('monster-exp-in')}>
                몹포상(<NumberFormat value={(monsterExp/100000000).toFixed(2)} displayType={'text'} thousandSeparator={true}/>억)
                </div>
              <div><input type='number' name='monsterExp' value={monsterExp} onChange={setDPSOption} onClick={inputClick}/></div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default DPSSimul;