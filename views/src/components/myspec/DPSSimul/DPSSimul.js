import React from 'react';
import styles from './DPSSimul.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const DPSSimul = ({setDPSOption, currHeadCounterValue, currHeadCounterList, currFireValue, currFireList, huntStart, huntSecond, huntStop, fireUse, fireCoolTime, fireUseTime, monsterCon, monsterExp, huntStartBool, dmgRandomList, monsterConRe, myExp, totalDmgSum, totalMonsterKill}) => {
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

  const conCoverWidth = Math.floor(monsterConRe/monsterCon*100);
  const conCoverStyle = {
    width: `${conCoverWidth}%`
  }

  const dmgList = dmgRandomList.map((obj, cnt) => {
    const {dmg, name} = obj;

    return (
      <div className={cx(`dmg-list-object-${name}`)} key={cnt}>
        <NumberFormat value={dmg} displayType={'text'} thousandSeparator={true} suffix={' '+ (name === 'normal' ? '' : name)}/>
      </div>
    )
  });

  return (
    <div className={cx('dps-simul')}>
      <h2 className={cx('dps-simul-title')}>
        DPS측정{huntStartBool ? '(사냥중..)' : ''}
      </h2>      
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
          <div className={cx('hunt-second')}>{Math.floor(huntSecond / 60) }분 {huntSecond % 60}초</div>
          <div className={cx('firecool-title')}>발화쿨/지속</div>
          <div className={cx('firecool-second')}>
            {currFireValue === '0' || currFireValue === '2' || currFireValue === '4' ? `-/${fireUseTime}/${fireUse ? 'ON' : 'OFF'}` : `${fireCoolTime}/${fireUseTime}/${fireUse ? 'ON' : 'OFF'}`}
          </div>          
          <div className={cx('monsterkill-title')}>잡은수</div>
          <div className={cx('monsterkill-value')}>
            <NumberFormat value={totalMonsterKill} displayType={'text'} thousandSeparator={true}/>kill
          </div>
          <div className={cx('exp-title')}>현재포상</div>
          <div className={cx('exp-value')}>
            <NumberFormat value={(myExp/100000000).toFixed(4)} displayType={'text'} thousandSeparator={true}/>억
          </div>
          <div className={cx('dps-title')}>DPS</div>
          <div className={cx('dps-value')}>
            <NumberFormat value={huntSecond === '0' ? '0' : Math.round(totalDmgSum / huntSecond)} displayType={'text'} thousandSeparator={true}/>
          </div>
        </div>

        <div className={cx('monster-view-info')}>
          <div className={cx('monster-con')}>
            <span className={cx('monster-connum')}>
              <NumberFormat value={monsterConRe} displayType={'text'} thousandSeparator={true}/>
              (<NumberFormat value={(monsterConRe/monsterCon*100).toFixed(2)} displayType={'text'} thousandSeparator={true}/>%)
            </span>
          </div>
          <div className={cx('monster-con-cover')} style={conCoverStyle}> </div>
          <div className={cx('monster-view')}>
            <div className={cx('dmg-list')}>
              {dmgList}
            </div>
            <div className={cx('monster-img')}>
              <img src={fireUse ? '/resource/img/monster_fire1.gif' : '/resource/img/monster1.gif'} alt='두꺼비'/>
            </div>
          </div>
          <div className={cx('monster-con-exp')}>
            <div>
              <div className={cx('monster-con-in')}>
                몹체력(<NumberFormat value={(monsterCon/100000000).toFixed(2)} displayType={'text'} thousandSeparator={true}/>억)
              </div>
              <div><input type='number' name='monsterCon' value={monsterCon} onChange={setDPSOption}/></div>
            </div>
            <div>
              <div className={cx('monster-exp-in')}>
                몹포상(<NumberFormat value={(monsterExp/100000000).toFixed(2)} displayType={'text'} thousandSeparator={true}/>억)
                </div>
              <div><input type='number' name='monsterExp' value={monsterExp} onChange={setDPSOption}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('dpssim-notice')}>
        설정한 무기, 몬스터, 스펙에 따라 실제 공속과 같은 속도로 데미지를 구합니다.<br/>
        입력한 포상에 비례해서 시간당 벌이를 예상합니다. 또한 DPS를 측정합니다.<br/>
        <div style={{border: '1px solid #dee2e6', marginTop: '0.4rem', marginBottom: '0.4rem'}}/>
        <b>샷건, 저격</b>은 공속을 곱하기3으로 설정했습니다.<br/>
        6강, 7강, 8강 이런식의 디테일한 설정은 하지않았습니다.
      </div>
    </div>
  );
};

export default DPSSimul;