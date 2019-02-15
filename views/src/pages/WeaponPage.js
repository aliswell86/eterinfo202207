import React, {Component} from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponListContainer from 'containers/list/WeaponListContainer';
import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';
import { Helmet } from "react-helmet";
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';
import scrollToComponent from 'react-scroll-to-component';
import styles from './page.scss';
import classNames from 'classnames/bind';

class WeaponPage extends Component {
  render() {
    const cx = classNames.bind(styles);
    const {history} = this.props;
    
    return (
      <PageTemplate>
        <Helmet>
          <title>이터널시티 무기정보</title>
          <meta name="description" content="착용부위별 등급별 이터널시티 무기 아이템정보. 불법무기 CL무기 목록조회" />
        </Helmet>
        <div className={cx('sub-header')}>
          <div className={cx('header-content-sub')}>
            <div> </div>
            <div className={cx('submenu-title')}>
              <span onClick={() => scrollToComponent(this.WeaponWhereBoxContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>무기종류선택</span>
            </div>
          </div>
        </div>
        <WeaponWhereBoxContainer ref={(ref) => this.WeaponWhereBoxContainer = ref}/>
        <div className={cx('page-top-adsense')}>
          <Adsense970250/>
          {/* <Adsense300250/> */}
        </div>
        <ListWrapper>        
          <WeaponListContainer history={history}/>
        </ListWrapper>
        <Adsense300250/>
      </PageTemplate>
    )
  }
}

export default WeaponPage;