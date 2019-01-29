import React from 'react';
import styles from './WeaponView.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const WeaponView = ({itemInfo, currWeaponUpDv, pathname}) => {
  const {
    item_nm, img_src, item_dtl_dv, dmg, cri, speed, tier, size, illegal, _id
  } = itemInfo;
  const {bodyUp, dmgUp} = currWeaponUpDv;
  const titleDefaultText = '이터널시티 무기정보';  
  let titleText = '';
  let costomLinkMsg = '';
  let metaText = `이터널시티 무기강화. 인벤 공격력 계산. 업그레이드 비용. 예상 데미지 산출`;
  
  if(item_nm === undefined || item_nm === null || item_nm === '') {
    if(pathname.indexOf('custom') > -1) {
      titleText = '공격력계산 - ' + titleDefaultText;
    }else{
      titleText = titleDefaultText;
    }
  }else{
    if(pathname.indexOf('custom') > -1) {
      titleText = item_nm + ' - 공격력계산 - ' + titleDefaultText;
      costomLinkMsg = <Link to={`/wp/${_id}`} className={cx('weapon-dmgsim-txt')}>상세정보</Link>;
    }else if(pathname.indexOf('wp') > -1) {
      titleText = item_nm + ' - 강화별공격력 - ' + titleDefaultText;
      costomLinkMsg = <Link to={`/custom/${_id}`} className={cx('weapon-dmgsim-txt')}>공격력계산</Link>;
    }
  }

  return (
    <div className={cx('weapon-view')}>
      <Helmet>
        <title>{titleText}</title>
        <meta name="description" content={metaText} />
      </Helmet>
      <h2 className={cx('name')}>
        {item_nm === undefined ?
          <Link to='/wp'>무기선택</Link> : 
          <>{item_nm} <Link to='/wp' className={cx('weapon-change-txt')}>무기변경</Link> {costomLinkMsg}</> 
        }
      </h2>
      <div className={cx('item-info')}>
        <div className={cx('img')}><img src={img_src} alt={item_nm}/></div>
        <div className={cx('option')}>
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
          <div className={cx('dmg')}>
            파괴력:<NumberFormat value={dmg} displayType={'text'} thousandSeparator={true} prefix={''} />
          </div>
          <div className={cx('cri')}>치명타:{cri}</div>          
        </div>
        <div className={cx('sub_option')}>
          <div className={cx('tier')}>{tier}등급</div>
          <div>
            <span className={cx('size')}>{size}</span>
            <span className={cx('detail_dv')}>{item_dtl_dv}</span>
          </div>
          <div>
            <span className={cx('speed')}>{speed}/1분</span>
            <span className={cx('illegal')}>{illegal === 'Y' ? '불법무기' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponView;