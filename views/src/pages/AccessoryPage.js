import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Helmet } from "react-helmet";
import styles from './page.scss';
import classNames from 'classnames/bind';
import scrollToComponent from 'react-scroll-to-component';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';
import ListWrapper from 'components/list/ListWrapper';
import AccessoryWhereBoxContainer from 'containers/wherebox/AccessoryWhereBoxContainer';
import AccessoryListContainer from 'containers/list/AccessoryListContainer';

class AccessoryPage extends Component {
  render() {
    const cx = classNames.bind(styles);
    const {history} = this.props;

    return (
      <PageTemplate>
        <Helmet>
          <title>이터널시티 악세서리정보</title>
          <meta name="description" content="착용부위별 등급별 이터널시티 토이,벨트,귀걸이,목걸이,팔찌,반지,왼손반지,왼반,환생악세,환악 아이템정보." />
        </Helmet>
        <div className={cx('sub-header')}>
          <div className={cx('header-content-sub')}>
            <div> </div>
            <div className={cx('submenu-title')}>
              <span onClick={() => scrollToComponent(this.AccessoryWhereBoxContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>악세종류선택</span>
            </div>
          </div>
        </div>
        <AccessoryWhereBoxContainer ref={(ref) => this.AccessoryWhereBoxContainer = ref}/>
        <ListWrapper>        
          <AccessoryListContainer history={history}/>
        </ListWrapper>
        <div className={cx('page-top-adsense')}>
          {/* <Adsense970250/>
          <Adsense300250/> */}
        </div>
      </PageTemplate>
    );
  }
}

export default AccessoryPage;