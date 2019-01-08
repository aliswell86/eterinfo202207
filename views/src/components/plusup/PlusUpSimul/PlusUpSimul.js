import React from 'react';
import styles from './PlusUpSimul.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';
import Adsense72890 from 'components/adsense/Adsense72890';

const cx = classNames.bind(styles);

const PlusUpSimul = ({setPlusUpKit, plusUpSimul, plusUpGo, plusUpGoF, plusUpGoKey, plusUpGoKeyF, currPlusDmg}) => {
  const {
    usePlusUpKit, usePlusUpKitF, usePlusUpKitEp, upTryCnt, simulCurrPlusUp, bestPlusUp, resultComment, plusUpLuck
  } = plusUpSimul;

  const plusUpLuckList = plusUpLuck.map(luck => {
    const {up, success, fail, failZero} = luck;

    return (
      <div className={cx('luck-object')} key={up}>
        <div className={cx('luck-object-up')}>+{up}</div>
        <div className={cx('luck-object-suc')}>성공:{success}%</div>
        <div className={cx('luck-object-fail')}>실패:{fail}%</div>
        <div className={cx('luck-object-failzero')}>초기화:{failZero}%</div>
      </div>
    )
  });
  
  return (
    <div className={cx('plusup-simul')}>
      <div className={cx('adsense')}>
        <Adsense72890/>
      </div>
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
        <div className={cx('kit-trade-body')}>
          <div className={cx('kit-use')}>
            <div className={cx('kit-use-normal')} onClick={plusUpGo} tabIndex='1' onKeyPress={plusUpGoKey}>
              <div>플러스업</div>
              <img src='/resource/img/plusupkit.gif' alt='일반'/>
              <div>
                <NumberFormat value={usePlusUpKit} displayType={'text'} thousandSeparator={true} prefix={''} suffix ={'개'}/>
              </div>
            </div>
            <div className={cx('kit-use-f')} onClick={plusUpGoF} tabIndex='2' onKeyPress={plusUpGoKeyF}>
              <div>완벽한 플러스업</div>
              <img src='/resource/img/plusupkitf.gif' alt='완벽한'/>
              <div>
              <NumberFormat value={usePlusUpKitF} displayType={'text'} thousandSeparator={true} prefix={''} suffix ={'개'}/>
              </div>
            </div>
          </div>
          <div className={cx('plusup-body')}>
            <div className={cx('plusup-grade')}>플러스:{simulCurrPlusUp}</div>
            <div className={cx('plusup-dmg')}>공격력:{currPlusDmg}%</div>
          </div>
        </div>
      </div>
      <div className={cx('adsense')}>
        <Adsense72890/>
      </div>
      <div className={cx('plus-luck-notice')}>
        <div className={cx('luck-title')}>플러스업 확률안내</div>
        <div className={cx('luck-list')}>
          {plusUpLuckList}
        </div>
      </div>
      <div className={cx('adsense')}>
        <Adsense72890/>
      </div>
    </div>
  );
};

export default PlusUpSimul;