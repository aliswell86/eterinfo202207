import React from 'react';
import styles from './WeaponView.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const WeaponView = ({itemInfo, currWeaponUpDv, loading}) => {
  const {
    item_nm, img_src, item_dtl_dv, dmg, cri, speed, tier, size, illegal
  } = itemInfo;
  const {bodyUp, dmgUp} = currWeaponUpDv;
  const none = loading ? 'none' : '';
  const innerStyle = {
    display: none
  }
  
  return (
    <div className={cx('weapon-view')} style={innerStyle}>
      <h2 className={cx('name')}>{item_nm}</h2>
      <div className={cx('item-info')}>
        <div className={cx('img')}><img src={img_src} alt={item_nm}/></div>
        <div className={cx('option')}>
          <div className={cx('dmg')}>
            파괴력:<NumberFormat value={dmg} displayType={'text'} thousandSeparator={true} prefix={''} />
          </div>
          <div className={cx('cri')}>치명타:{cri}</div>
          <div className={cx(`body_nm${bodyUp}`)}>
            {
              (() => {
                const dmgUpNum = Number(dmgUp);
                if(dmgUpNum === 0) return '';
                else if(dmgUpNum > 0 && dmgUpNum < 10) return `+${dmgUp} `;
                else if(dmgUpNum === 10) return 'MAX ';
                else if(dmgUpNum > 10) return `MAX +${dmgUp-10} `;
              })()
            }
            {
              (() => {
                switch(bodyUp) {
                  case '0': return '기본';
                  case '1': return '초보';
                  case '2': return '숙련';
                  case '3': return '전문';
                  case '4': return '장인';
                  case '5': return '명인';
                  case '6': return 'O.T.';
                  default: return '기본';
                }
              })()
            }
          </div>
        </div>
        <div className={cx('sub_option')}>
          <div className={cx('tier')}>{tier}등급</div>
          <div className={cx('detail_dv')}>{item_dtl_dv}</div>
          <div className={cx('size')}>{size}</div>
          <div className={cx('speed')}>{speed}/1분</div>
          <div className={cx('illegal')}>{illegal === 'Y' ? '불법무기' : ''}</div>
        </div>
      </div>
    </div>
  );
};

export default WeaponView;