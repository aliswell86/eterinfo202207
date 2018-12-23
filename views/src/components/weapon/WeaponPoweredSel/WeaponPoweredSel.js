import React from 'react';
import styles from './WeaponPoweredSel.scss';
import classNames from 'classnames/bind';
import { Button } from 'antd';

const cx = classNames.bind(styles);

const WeaponPoweredSel = ({setWeaponUpDv, loading}) => {
  const none = loading ? 'none' : '';
  const innerStyle = {
    display: none
  }
  return (
    <div className={cx('weapon-powered-sel')} style={innerStyle}>
      <div className={cx('bodyup-btns')}>
        <div><Button name='bodyUp' onClick={setWeaponUpDv} value='0'>기본</Button></div>
        <div><Button name='bodyUp' onClick={setWeaponUpDv} value='1'>초보</Button></div>
        <div><Button name='bodyUp' onClick={setWeaponUpDv} value='2'>숙련</Button></div>
        <div><Button name='bodyUp' onClick={setWeaponUpDv} value='3'>전문</Button></div>
        <div><Button name='bodyUp' onClick={setWeaponUpDv} value='4'>장인</Button></div>
        <div><Button name='bodyUp' onClick={setWeaponUpDv} value='5'>명인</Button></div>
        <div><Button name='bodyUp' onClick={setWeaponUpDv} value='6'>O.T.</Button></div>
      </div>
      <div className={cx('dmgup-selected')}>
        <select name='dmgUp' onChange={setWeaponUpDv}>
          <option value='0'>노업</option>
          <option value='1'>+1</option>
          <option value='2'>+2</option>
          <option value='3'>+3</option>
          <option value='4'>+4</option>
          <option value='5'>+5</option>
          <option value='6'>+6</option>
          <option value='7'>+7</option>
          <option value='8'>+8</option>
          <option value='9'>+9</option>
          <option value='10'>MAX</option>
          <option value='11'>MAX +1</option>
          <option value='12'>MAX +2</option>
          <option value='13'>MAX +3</option>
          <option value='14'>MAX +4</option>
          <option value='15'>MAX +5</option>
          <option value='16'>MAX +6</option>
          <option value='17'>MAX +7</option>
          <option value='18'>MAX +8</option>
          <option value='19'>MAX +9</option>
        </select>
      </div>
    </div>
  );
};

export default WeaponPoweredSel;