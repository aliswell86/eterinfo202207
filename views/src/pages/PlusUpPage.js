import React, {Component} from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Helmet } from "react-helmet";
import ListWrapper from 'components/list/ListWrapper';
import PlusUpGridContainer from 'containers/plusup/PlusUpGridContainer';
import PlusUpSimulContainer from 'containers/plusup/PlusUpSimulContainer';
import PlusUpLuckNoticeContainer from 'containers/plusup/PlusUpLuckNoticeContainer';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense320100 from 'components/adsense/Adsense320100';
import Adsense72890 from 'components/adsense/Adsense72890';
import scrollToComponent from 'react-scroll-to-component';
import styles from './page.scss';
import classNames from 'classnames/bind';

class PlusUpPage extends Component {
  render() {
    const cx = classNames.bind(styles);
    
    return (
      <PageTemplate>
        <Helmet>
          <title>이터인포 - 플러스업(이터널시티 방어구)</title>
          <meta name="description" content="한국형 좀비 아포칼립스 RPG! 이터널시티 방어구의 플러스업 관련정보를 제공합니다." />
        </Helmet>
        <div className={cx('sub-header')}>
          <div className={cx('header-content-sub')}>
            <div> </div>
            <div className={cx('submenu-title')}>
              <span onClick={() => scrollToComponent(this.PlusUpGridContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>강화별공격력</span>
              <span onClick={() => scrollToComponent(this.PlusUpSimulContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>플업강화시뮬</span>
              <span onClick={() => scrollToComponent(this.PlusUpLuckNoticeContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>강화별성공율</span>
            </div>
          </div>
        </div>
        <ListWrapper>        
          <PlusUpGridContainer ref={(ref) => this.PlusUpGridContainer = ref}/>
        </ListWrapper>
        <div className={cx('page-middle-adsense')}>
          <Adsense72890/>
          <Adsense320100/>
        </div>
        <ListWrapper>        
          <PlusUpSimulContainer ref={(ref) => this.PlusUpSimulContainer = ref}/>
        </ListWrapper>
        <div className={cx('page-middle-adsense')}>
          <Adsense72890/>
          <Adsense320100/>
        </div>
        <ListWrapper>        
          <PlusUpLuckNoticeContainer ref={(ref) => this.PlusUpLuckNoticeContainer = ref}/>
        </ListWrapper>
        <div className={cx('page-top-adsense')}>
          <Adsense970250/>
          <Adsense300250/>
        </div>
      </PageTemplate>
    );
  }
}

export default PlusUpPage;