import React from 'react';
import styles from './PlusUpSimul.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';
import Adsense300250 from 'components/adsense/Adsense300250';
// import Adsense320100 from 'components/adsense/Adsense320100';

const cx = classNames.bind(styles);

const PlusUpSimul = ({setPlusUpKit, plusUpSimul, plusUpGo, plusUpGoF, plusUpGoKey, plusUpGoKeyF, currPlusDmg, plusUpKitFNeed, plusUpKitNeed}) => {
  const {
    usePlusUpKit, usePlusUpKitF, usePlusUpKitEp, upTryCnt, simulCurrPlusUp, bestPlusUp, resultComment
  } = plusUpSimul;

  return (
    <div className={cx('plusup-simul')}>      
      <div className={cx('kit-trade')}>
        <div className={cx('kit-trade-title')}>
          <div className={cx('kit-trade-left')}>플러스업 강화 시뮬레이션</div>
          <div className={cx('kit-trade-center')}>
          </div>
          <div className={cx('kit-trade-right')}>
            <button onClick={() => setPlusUpKit('0')}>플업<br/>초기화</button>
            <button onClick={() => setPlusUpKit('1')}>플업 10Set<br/>1개</button>
            <button onClick={() => setPlusUpKit('10')}>플업 10Set<br/>10개</button>
            <button onClick={() => setPlusUpKit('100')}>플업 10Set<br/>100개</button>
            <button onClick={() => setPlusUpKit('1000')}>플업 10Set<br/>1000개</button>
          </div>
        </div>
        <div className={cx('plusup-notice')}>
          <div className={cx('notice-left')}>{upTryCnt}회 시도</div>
          <div className={cx('notice-center')}>
            <div className={cx('notice-center-top')}>{resultComment}</div>
            <div className={cx('notice-center-bottom')}>최고강화(일반): +{bestPlusUp}</div>
          </div>
          <div className={cx('notice-right')}>
            <NumberFormat value={usePlusUpKitEp} displayType={'text'} thousandSeparator={true} prefix={'사용EP: '} suffix ={'EP'}/>
          </div>
        </div>
        {/* <div className={cx('adsense')} style={{paddingTop: '0.4rem'}}>
          <Adsense72890/>
          <Adsense320100/>
        </div> */}
        <div className={cx('kit-trade-body')}>
          <div className={cx('kit-use')}>
            <div className={cx('kit-use-normal')} onClick={plusUpGo} tabIndex='1' onKeyPress={plusUpGoKey}>
              <div>플러스업</div>
              <img src='/resource/img/plusupkit.gif' alt='일반'/>
              <div><b><NumberFormat value={usePlusUpKit} displayType={'text'} thousandSeparator={true} prefix={''} suffix ={'개'}/></b></div>
              <div><NumberFormat value={plusUpKitNeed} displayType={'text'} thousandSeparator={true} prefix={'(필요개수: '} suffix ={'개)'}/></div>
            </div>
            <div className={cx('kit-use-f')} onClick={plusUpGoF} tabIndex='2' onKeyPress={plusUpGoKeyF}>
              <div>완벽한 플러스업</div>
              <img src='/resource/img/plusupkitf.gif' alt='완벽한'/>
              <div><b><NumberFormat value={usePlusUpKitF} displayType={'text'} thousandSeparator={true} prefix={''} suffix ={'개'}/></b></div>
              <div><NumberFormat value={plusUpKitFNeed} displayType={'text'} thousandSeparator={true} prefix={'(필요개수: '} suffix ={'개)'}/></div>
            </div>
          </div>
          <div className={cx('plusup-body')}>
            <div className={cx('plusup-grade')}>플러스:{simulCurrPlusUp}</div>
            <div className={cx('plusup-dmg')}>공격력:{currPlusDmg}%</div>
          </div>
          {/* <Adsense300250/> */}
        </div>
      </div>
    </div>
  );
};

export default PlusUpSimul;