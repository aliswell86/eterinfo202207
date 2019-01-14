import React from 'react';
import styles from './MySpecInven.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';
import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const MySpecInven = ({myStatInsert, myStat, setParaDoping, inputClick, skillList, stype1}) => {
  const {conStat, skillStat, itemDmgUp, limitDmg, itemCriUp, isParasite, whereDoping, monsterSize, monsterType, myDmgType, currSkillSeq, dmgEvent} = myStat;
  const stypeDisabled = stype1 === '2' ? true : false;
  const mySkillList = skillList.map((skill) => {
    const {seq, name, increaseTarget, increaseRt} = skill;

    return (
      <div key={seq}>
        <Radio name='currSkillSeq' value={seq} onChange={setParaDoping} defaultValue={currSkillSeq}>
          {name}({increaseTarget === 'all' ? '모든데미지' : '치명데미지' } {increaseRt}배)
        </Radio>
      </div>
    );
  });
  
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
              <div><Radio name='isParasite' value='0' onChange={setParaDoping} defaultValue={isParasite}>없음</Radio></div>
              <div><Radio name='isParasite' value='2.5' onChange={setParaDoping} defaultValue={isParasite}>정규1급</Radio></div>
              <div><Radio name='isParasite' value='3' onChange={setParaDoping} defaultValue={isParasite}>변이</Radio></div>
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
        <Adsense320100/>
      </div>
      <div className={cx('skill-monster')}>
        <h2 className={cx('monster-size-title')}>몬스터크기와 속성</h2>
        <div className={cx('monster-size')}>
        <div><Radio name='monsterSize' value='소형' onChange={setParaDoping} defaultValue={monsterSize}>소형</Radio></div>
          <div><Radio name='monsterSize' value='중형' onChange={setParaDoping} defaultValue={monsterSize}>중형</Radio></div>
          <div><Radio name='monsterSize' value='대형' onChange={setParaDoping} defaultValue={monsterSize}>대형</Radio></div>
        </div>
        <div className={cx('monster-type')}>
          <div><Radio name='monsterType' value='일반' onChange={setParaDoping} defaultValue={monsterType}>일반</Radio></div>
          <div><Radio name='monsterType' value='연성' onChange={setParaDoping} defaultValue={monsterType} disabled={stypeDisabled}>연성</Radio></div>
          <div><Radio name='monsterType' value='강성' onChange={setParaDoping} defaultValue={monsterType} disabled={stypeDisabled}>강성</Radio></div>
          <div><Radio name='monsterType' value='변이' onChange={setParaDoping} defaultValue={monsterType} disabled={stypeDisabled}>변이</Radio></div>
          <div><Radio name='monsterType' value='장갑' onChange={setParaDoping} defaultValue={monsterType} disabled={stypeDisabled}>장갑</Radio></div>
          <div><Radio name='monsterType' value='중장갑' onChange={setParaDoping} defaultValue={monsterType} disabled={stypeDisabled}>중장갑</Radio></div>
        </div>
        <h2 className={cx('monster-size-title')}>탄창(근케는 일반)과 스킬</h2>
        <div className={cx('mydmg-type')}>
          <div><Radio name='myDmgType' value='일반' onChange={setParaDoping} defaultValue={myDmgType}>일반</Radio></div>
          <div><Radio name='myDmgType' value='소이' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>소이</Radio></div>
          <div><Radio name='myDmgType' value='Slug' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>Slug</Radio></div>
          <div><Radio name='myDmgType' value='철갑' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>철갑</Radio></div>
          <div><Radio name='myDmgType' value='열화우라늄' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>열화우라늄</Radio></div>
          <div><Radio name='myDmgType' value='유탄' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>유탄</Radio></div>
          <div><Radio name='myDmgType' value='대인로켓' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>대인로켓</Radio></div>
          <div><Radio name='myDmgType' value='대전차탄' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>대전차탄</Radio></div>
          <div><Radio name='myDmgType' value='대전차로켓' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>대전차로켓</Radio></div>
          <div><Radio name='myDmgType' value='중금속탄' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>중금속탄</Radio></div>
          <div><Radio name='myDmgType' value='전속성탄' onChange={setParaDoping} defaultValue={myDmgType} disabled={stypeDisabled}>전속성탄</Radio></div>
        </div>
        <div className={cx('my-skill-list')}>
          <div><Radio name='currSkillSeq' value='0' onChange={setParaDoping} defaultValue={currSkillSeq}>없음</Radio></div>
          {mySkillList}
        </div>
        <h2 className={cx('dmg-event-title')}>공격력 증가이벤트</h2>
        <div className={cx('dmg-event')}>
          <div><Radio name='dmgEvent' value='0' onChange={setParaDoping} defaultValue={dmgEvent}>없음</Radio></div>
          <div><Radio name='dmgEvent' value='5' onChange={setParaDoping} defaultValue={dmgEvent}>5%증가</Radio></div>
          <div><Radio name='dmgEvent' value='10' onChange={setParaDoping} defaultValue={dmgEvent}>10%증가</Radio></div>
          <div><Radio name='dmgEvent' value='20' onChange={setParaDoping} defaultValue={dmgEvent}>20%증가</Radio></div>
        </div>
      </div>
    </div>
  );
};

export default MySpecInven;