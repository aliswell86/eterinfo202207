import React from 'react';
import styles from './WeaponViewPoweredBy.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const WeaponViewPoweredByContainer = ({poweredByDmg}) => {

  const poweredByDmgList = poweredByDmg.map((poweredByList, cnt) => {
    const dmgList = poweredByList.map((dmg, cnt1) => {
      return (
        <div className={cx('dmg')} key={cnt1}>
          <NumberFormat value={dmg} displayType={'text'} thousandSeparator={true} prefix={''} />          
          {
            (() => {
              let tit = '+' + cnt1;
              if(cnt1 === 10) tit = 'M'
              else if(cnt1 > 10) tit = 'M +' + (cnt1 - 10);

              return <span className={cx('powered-by-tit')}>{tit}</span>
            })()
          }
        </div>
      )
    });

    return (
      <div className={cx('powered-by-dmg-list')} key={cnt}>
        {
          (() => {
            switch(cnt) {
              case cnt = 0: return <div className={cx('powered-by-dmg-title')}>기본 몸체</div>
              case cnt = 1: return <div className={cx('powered-by-dmg-title')}>초보 몸체(.1배)</div>
              case cnt = 2: return <div className={cx('powered-by-dmg-title')}>숙련 몸체(.3배)</div>
              case cnt = 3: return <div className={cx('powered-by-dmg-title')}>전문 몸체(.5배)</div>
              case cnt = 4: return <div className={cx('powered-by-dmg-title')}>장인 몸체(2배)</div>
              case cnt = 5: return <div className={cx('powered-by-dmg-title')}>명인 몸체(3배)</div>
              case cnt = 6: return <div className={cx('powered-by-dmg-title')}>O.T. 몸체(4배)</div>
              default: return <div className={cx('powered-by-dmg-title')}>기본 몸체(.1배)</div>
            }
          })()
        }
        {dmgList}
      </div>
    )
  });
  
  return (
    <div>
      <div className={cx('weapon-view-powerd-by')}>      
        {poweredByDmgList}
      </div>
    </div>
  );
};

export default WeaponViewPoweredByContainer;