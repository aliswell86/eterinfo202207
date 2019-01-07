import React from 'react';
import styles from './PlusUpSimul.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const PlusUpSimul = ({setPlusUpKit, plusUpSimul, plusUpGo, plusUpGoF}) => {
  const {usePlusUpKit, usePlusUpKitF, usePlusUpKitEp, upTryCnt, currPlusUp, resultComment} = plusUpSimul;
  
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
          {upTryCnt}회 시도. {currPlusUp}강 {resultComment} 사용EP: {usePlusUpKitEp}
        </div>
        <div className={cx('kit-trade-body')}>
          <div className={cx('kit-use')}>
            <div className={cx('kit-use-normal')} onClick={plusUpGo}>
              <div>플러스업</div>
              <img src='/resource/img/plusupkit.gif' alt='일반'/>
              <div>
                <NumberFormat value={usePlusUpKit} displayType={'text'} thousandSeparator={true} prefix={''} suffix ={'개'}/>
              </div>
            </div>
            <div className={cx('kit-use-f')} onClick={plusUpGoF}>
              <div>완벽한 플러스업</div>
              <img src='/resource/img/plusupkitf.gif' alt='완벽한'/>
              <div>
              <NumberFormat value={usePlusUpKitF} displayType={'text'} thousandSeparator={true} prefix={''} suffix ={'개'}/>
              </div>
            </div>
          </div>
          <div className={cx('plusup-body')}>
            <img src='/resource/img/plusupbody.gif' alt='몸체'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlusUpSimul;