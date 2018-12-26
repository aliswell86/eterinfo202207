import React from 'react';
import styles from './UpgradeCost.scss';
import classNames from 'classnames/bind';
import { Button } from 'antd';
import fragment from 'fragment';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const UpgradeCost = ({itemInfo, upgradeInfo, setUpgradeTax}) => {
  const {cost} = itemInfo;
  const {tax} = upgradeInfo;
  
  return (
    <div className={cx('upgrade-cost')}>
      <h2 className={(cx('upgrade-cost-title'))}>강화별 업그레이드 비용</h2>
      <div className={cx('base-cost')}>
        {
          cost === '0' || cost === '' || cost === undefined  || cost === null ? '기준이 되는 가격정보가 없습니다. 준비중 입니다.' :
          <div>
            기준가격:<NumberFormat value={cost} displayType={'text'} thousandSeparator={true} prefix={''} />EL
            세율:{tax}%
          </div>
        }
      </div>
      {
        cost === '0' || cost === '' || cost === undefined  || cost === null ? '' :
        <fragment>
          <h3>세금선택</h3>
          <div className={cx('tax-btns')}>
            <Button name='tax' onClick={setUpgradeTax} value='-1'>-1%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='-2'>-2%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='-3'>-3%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='-4'>-4%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='-5'>-5%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='0'>0%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='1'>1%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='2'>2%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='3'>3%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='4'>4%</Button>
            <Button name='tax' onClick={setUpgradeTax} value='5'>5%</Button>
          </div>
        </fragment>
      }
    </div>
  );
};

export default UpgradeCost;