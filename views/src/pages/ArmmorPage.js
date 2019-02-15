import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Helmet } from "react-helmet";
import styles from './page.scss';
import classNames from 'classnames/bind';
import scrollToComponent from 'react-scroll-to-component';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';
import ArmmorWhereBoxContainer from 'containers/wherebox/ArmmorWhereBoxContainer';
import ListWrapper from 'components/list/ListWrapper';
import ArmmorListContainer from 'containers/list/ArmmorListContainer';

class ArmmorPage extends Component {
  render() {
    const cx = classNames.bind(styles);
    const {history} = this.props;

    return (
      <PageTemplate>
        <Helmet>
          <title>이터널시티 방어구정보</title>
          <meta name="description" content="착용부위별 등급별 이터널시티 방어구 아이템정보. 이터널시티 플러스업." />
        </Helmet>
        <div className={cx('sub-header')}>
          <div className={cx('header-content-sub')}>
            <div> </div>
            <div className={cx('submenu-title')}>
              <span onClick={() => scrollToComponent(this.ArmmorWhereBoxContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>방어구종류선택</span>
            </div>
          </div>
        </div>
        <ArmmorWhereBoxContainer ref={(ref) => this.ArmmorWhereBoxContainer = ref}/>
        <div className={cx('page-top-adsense')}>
          <Adsense970250/>
          {/* <Adsense300250/> */}
        </div>
        <ListWrapper>        
          <ArmmorListContainer history={history}/>
        </ListWrapper>
        <Adsense300250/>
      </PageTemplate>
    );
  }
}

export default ArmmorPage;