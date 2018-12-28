import React from 'react';
import styles from './UpgradeCost.scss';
import classNames from 'classnames/bind';
import { Button } from 'antd';
import NumberFormat from 'react-number-format';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense72890 from 'components/adsense/Adsense72890';

const cx = classNames.bind(styles);

const UpgradeCost = ({itemInfo, upgradeInfo, setUpgradeTax}) => {
  const {cost} = itemInfo;
  const {tax} = upgradeInfo;
  
  return (
    <div className={cx('upgrade-cost')}>
      <div className={cx('upgrade-cost-body')}>
        <h2 className={(cx('upgrade-cost-title'))}>강화별 업그레이드 비용</h2>
        {
          cost === '0' || cost === '' || cost === undefined  || cost === null ? <div>기준이 되는 가격정보가 없습니다. 준비중 입니다.</div> :
          <div className={cx('cost-head')}>
            <div className={cx('base-cost')}>기준가격: <NumberFormat value={cost} displayType={'text'} thousandSeparator={true} prefix={''} /></div>
            <div className={cx('tax')}>세율: {tax}%</div>
          </div>
        }
        {
          cost === '0' || cost === '' || cost === undefined  || cost === null ? '' :
          <div className={cx('cost-body')}>
            <div className={cx('upgrade1-cost')}>
              초보등급:
              <NumberFormat value={ Math.ceil(((Number(cost) * 0.1) / 100) * (100 + Number(tax))) } displayType={'text'} thousandSeparator={true} prefix={''} />
              (앱솔루트)
              <NumberFormat value={ Math.ceil(((Number(cost) * 0.3) / 100) * (100 + Number(tax))) } displayType={'text'} thousandSeparator={true} prefix={''} />
            </div>
            <div className={cx('upgrade2-cost')}>
              숙련등급:
              <NumberFormat value={ Math.ceil(((Number(cost) * 0.3) / 100) * (100 + Number(tax))) } displayType={'text'} thousandSeparator={true} prefix={''} />
              (앱솔루트)
              <NumberFormat value={ Math.ceil(((Number(cost) * 0.8) / 100) * (100 + Number(tax))) } displayType={'text'} thousandSeparator={true} prefix={''} />
            </div>
            <div className={cx('upgrade3-cost')}>
              전문등급:
              <NumberFormat value={ Math.ceil(((Number(cost) * 0.5) / 100) * (100 + Number(tax))) } displayType={'text'} thousandSeparator={true} prefix={''} />
              (앱솔루트)
              <NumberFormat value={ Math.ceil(((Number(cost) * 2.4) / 100) * (100 + Number(tax))) } displayType={'text'} thousandSeparator={true} prefix={''} />
            </div>
            <div className={cx('upgrade1-cost')}>
              장인, 명인, O.T 등급:
              <NumberFormat value={ Math.ceil(((Number(cost) * 0.1) / 100) * (100 + Number(tax))) } displayType={'text'} thousandSeparator={true} prefix={''} />
              (앱솔루트) 불가
            </div>
          </div>
        }
        {
          cost === '0' || cost === '' || cost === undefined  || cost === null ? '' :
          <div className={cx('cost-footer')}>
            <h3>세금선택</h3>
            <div className={cx('tax-btns')}>
              {/* <Button name='tax' onClick={setUpgradeTax} value='-1'>-1%</Button>
              <Button name='tax' onClick={setUpgradeTax} value='-2'>-2%</Button>
              <Button name='tax' onClick={setUpgradeTax} value='-3'>-3%</Button>
              <Button name='tax' onClick={setUpgradeTax} value='-4'>-4%</Button> */}
              <Button name='tax' onClick={setUpgradeTax} value='-5'>-5%</Button>
              <Button name='tax' onClick={setUpgradeTax} value='0'>0%</Button>
              {/* <Button name='tax' onClick={setUpgradeTax} value='1'>1%</Button>
              <Button name='tax' onClick={setUpgradeTax} value='2'>2%</Button>
              <Button name='tax' onClick={setUpgradeTax} value='3'>3%</Button>
              <Button name='tax' onClick={setUpgradeTax} value='4'>4%</Button> */}
              <Button name='tax' onClick={setUpgradeTax} value='5'>5%</Button>
            </div>
          </div>
        }
      </div>
      <div className={cx('upgrade-cost-adsense')}>
        <Adsense300250/>
        <Adsense72890/>
      </div>
    </div>
  );
};

export default UpgradeCost;