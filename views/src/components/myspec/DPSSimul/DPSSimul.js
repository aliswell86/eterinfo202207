import React from 'react';
import styles from './DPSSimul.scss';
import classNames from 'classnames/bind';
import Radio from 'components/common/Radio';

const cx = classNames.bind(styles);

const DPSSimul = ({setDPSOption, currHeadCounterOption, headCounterOptionList}) => {
  const hcOptionList = headCounterOptionList.map(option => {
    const {seq, description} = option;
    
    return (
      <div key={seq}>
        <Radio name='currHeadCounterOption' value={seq} onChange={setDPSOption} defaultValue={currHeadCounterOption}>
          {description}
        </Radio>
      </div>

// dps측정 (속성및크기에 따른 비율표 추가할것)
// - 현재무기
// step1.기본설정 헤드샷비율
//  1) 근케 : 치명확률의 10분에1 (임의), 투척(헤드샷비율 50%) (임의)
//  2) 총케 : 기본적으로 치명확률의 100%이나, 컨트롤여부반영
// (옵션선택 : 신컨(헤샷100), 무난(90%), 발컨(60%))
// step2. 발화비율(지속시간 13초)
//  옵션선택 - 발화토이(쿨40초), 소이탄or발화무기사용속성으로(체력10%깔경우), 없음(저격)
    )
  });

  return (
    <div className={cx('dps-simul')}>
      <h2 className={cx('dps-simul-title')}>DPS측정</h2>
      <div className={cx('option-select')}>
        <div className={cx('headshot-option')}>
          <div className={cx('headshot-option-title')}>헤드샷,카운터 설정</div>
          <div className={cx('headshot-option-body')}>
            {hcOptionList}
          </div>
        </div>
        <div className={cx('fire-option')}>
          <div className={cx('fire-option-title')}>발화 설정</div>
          <div className={cx('fire-option-body')}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DPSSimul;