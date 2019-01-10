import React from 'react';
import styles from './MySpecInven.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';
import Checkbox from 'components/common/Checkbox';

const cx = classNames.bind(styles);

const MySpecInven = ({myStatInsert, myStat, setParaDoping, inputClick}) => {
  const {conStat, skillStat, itemDmgUp, limitDmg, itemCriUp, isParasite, whereDoping} = myStat;
  
  return (
    <div className={cx('myspec-inven')}>
      <div className={cx('myspec-body')}>
        <h2 className={cx('myspec-title')}>세팅상세정보</h2>
        <ul>
          <li><b>템상공</b> : 템에의한 공업 합계(영웅옷28+공토이6+최악풀셋6=40)</li>
          <li><b>템상치</b> : 템에의한 치명 합계(치명날개12+악세20=32)</li>
          <li><b>해방공</b> : 공격력해방 스탯수치</li>
        </ul>
        <div className={cx('spec-dv')}>
          <div className={cx('mystat')}>
            <div>
              <div className={cx('mystat-con')}>체력</div>
              <div><input type='number' name='conStat' value={conStat} onChange={myStatInsert} onClick={inputClick}/></div>
            </div>
            <div>
              <div className={cx('mystat-skill')}>기술</div>
              <div><input type='number' name='skillStat' value={skillStat} onChange={myStatInsert} onClick={inputClick}/></div>
            </div>
            <div>
              <div>템상공</div>
              <div><input type='number' name='itemDmgUp' value={itemDmgUp} onChange={myStatInsert} onClick={inputClick}/></div>
            </div>
            <div>
              <div>템상치</div>
              <div><input type='number' name='itemCriUp' value={itemCriUp} onChange={myStatInsert} onClick={inputClick}/></div>
            </div>
            <div>
              <div>해방공</div>
              <div><input type='number' name='limitDmg' value={limitDmg} onChange={myStatInsert} onClick={inputClick}/></div>
            </div>
          </div>
          <div className={cx('parasite-doping')}>
            <div className={cx('parasite')}>
              <div><Checkbox name="isParasite" onChange={setParaDoping} checked={isParasite}>변이</Checkbox></div>
            </div>
            <div className={cx('doping')}>
              <div className={cx('whereDoping')}>
                <div><Radio name='whereDoping' value='0' onChange={setParaDoping} defaultValue={whereDoping}>없음</Radio></div>
                <div><Radio name='whereDoping' value='2' onChange={setParaDoping} defaultValue={whereDoping}>일반공앰</Radio></div>
                <div><Radio name='whereDoping' value='3' onChange={setParaDoping} defaultValue={whereDoping}>고급공앰</Radio></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySpecInven;