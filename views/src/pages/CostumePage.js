import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Helmet } from "react-helmet";
import styles from './page.scss';
import classNames from 'classnames/bind';
import scrollToComponent from 'react-scroll-to-component';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';
import ListWrapper from 'components/list/ListWrapper';
import CostumeWhereBoxContainer from 'containers/wherebox/CostumeWhereBoxContainer';
import CostumeListContainer from 'containers/list/CostumeListContainer';

class ArmmorPage extends Component {
  render() {
    const cx = classNames.bind(styles);
    const {history} = this.props;

    return (
      <PageTemplate>
        <Helmet>
          <title>이터널시티 코스튬 날개 정보</title>
          <meta name="description" content="착용부위별 등급별 이터널시티 코스튬, 날개 아이템정보." />
        </Helmet>
        <div className={cx('sub-header')}>
          <div className={cx('header-content-sub')}>
            <div> </div>
            <div className={cx('submenu-title')}>
              <span onClick={() => scrollToComponent(this.CostumeWhereBoxContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>코스튬종류선택</span>
            </div>
          </div>
        </div>
        <CostumeWhereBoxContainer ref={(ref) => this.CostumeWhereBoxContainer = ref}/>
        <div className={cx('page-top-adsense')}>
          <Adsense970250/>
          {/* <Adsense300250/> */}
        </div>
        <ListWrapper>        
          <CostumeListContainer history={history}/>
        </ListWrapper>
        <Adsense300250/>
      </PageTemplate>
    );
  }
}

export default ArmmorPage;