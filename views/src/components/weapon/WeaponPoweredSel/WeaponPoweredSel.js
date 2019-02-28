import React from 'react';
import styles from './WeaponPoweredSel.scss';
import classNames from 'classnames/bind';
import Checkbox from 'components/common/Checkbox';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const WeaponPoweredSel = ({setWeaponUpDv, currWeaponUpDv}) => {
  
  return (
    <div className={cx('weapon-powered-sel-adsense')}>
      <div className={cx('weapon-powered-sel')}>
        <div className={cx('powered-body')}>
          <div style={{padding: '0.2rem'}}><Checkbox name="isCriUp" onChange={setWeaponUpDv} checked={currWeaponUpDv.isCriUp}>치명전문</Checkbox></div>
          <div className={cx('bodyup-btns')}>
            <div><button name='bodyUp' onClick={setWeaponUpDv} value='0'>기본</button></div>
            <div><button name='bodyUp' onClick={setWeaponUpDv} value='1'>초보</button></div>
            <div><button name='bodyUp' onClick={setWeaponUpDv} value='2'>숙련</button></div>
          </div>
          <div className={cx('bodyup-btns')}>
            <div><button name='bodyUp' onClick={setWeaponUpDv} value='3'>전문</button></div>
            <div><button name='bodyUp' onClick={setWeaponUpDv} value='4'>장인</button></div>
            <div><button name='bodyUp' onClick={setWeaponUpDv} value='5'>명인</button></div>
            <div style={{marginRight: '0.1rem'}}>
              <button name='bodyUp' onClick={setWeaponUpDv} value='6'>O.T.</button>
            </div>
          </div>
          <div className={cx('dmgup-btns')}>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='0'>노강</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='1'>+1</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='2'>+2</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='3'>+3</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='4'>+4</button></div>
          </div>
          <div className={cx('dmgup-btns')}>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='5'>+5</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='6'>+6</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='7'>+7</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='8'>+8</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='9'>+9</button></div>        
          </div>
          <div className={cx('dmgup-btns')}>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='10'>MAX</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='11'>MAX +1</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='12'>MAX +2</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='13'>MAX +3</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='14'>MAX +4</button></div>
          </div>
          <div className={cx('dmgup-btns')}>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='15'>MAX +5</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='16'>MAX +6</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='17'>MAX +7</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='18'>MAX +8</button></div>
            <div><button name='dmgUp' onClick={setWeaponUpDv} value='19'>MAX +9</button></div>
          </div>
        </div>
      </div>
      <Adsense320100/>
      <Adsense300250/>
    </div>
  );
};

export default WeaponPoweredSel;