import React from 'react';
import styles from './WeaponPoweredSel.scss';
import classNames from 'classnames/bind';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense72890 from 'components/adsense/Adsense72890';

const cx = classNames.bind(styles);

const WeaponPoweredSel = ({setWeaponUpDv, loading}) => {
  // const none = loading ? 'none' : '';
  // const innerStyle = {
  //   display: none
  // }
  return (
    <div className={cx('weapon-powered-sel')}>
      <div className={cx('powered-body')}>
        <div className={cx('bodyup-btns')}>
          <div><button name='bodyUp' onClick={setWeaponUpDv} value='0'>기본</button></div>
          <div><button name='bodyUp' onClick={setWeaponUpDv} value='1'>초보</button></div>
          <div><button name='bodyUp' onClick={setWeaponUpDv} value='2'>숙련</button></div>
          <div><button name='bodyUp' onClick={setWeaponUpDv} value='3'>전문</button></div>
          <div><button name='bodyUp' onClick={setWeaponUpDv} value='4'>장인</button></div>
          <div><button name='bodyUp' onClick={setWeaponUpDv} value='5'>명인</button></div>
          <div><button name='bodyUp' onClick={setWeaponUpDv} value='6'>O.T.</button></div>
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
      <div className={cx('powered-adsense')}>
        <Adsense300250/>
        <Adsense72890/>
      </div>
    </div>
  );
};

export default WeaponPoweredSel;