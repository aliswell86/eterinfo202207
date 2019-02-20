import React, {Component} from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Helmet } from "react-helmet";
import ListWrapper from 'components/list/ListWrapper';
import BoxListContainer from 'containers/boxsim/BoxListContainer';
import BoxResultContainer from 'containers/boxsim/BoxResultContainer';
import BoxLogContainer from 'containers/boxsim/BoxLogContainer';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense320100 from 'components/adsense/Adsense320100';
import Adsense72890 from 'components/adsense/Adsense72890';
import scrollToComponent from 'react-scroll-to-component';
import styles from './page.scss';
import classNames from 'classnames/bind';

class BoxSimulPage extends Component {
  render() {
    const cx = classNames.bind(styles);

    return (
      <PageTemplate>
        <Helmet>
          <title>이터인포 - 박스뽑기(확률형 캐시아이템)</title>
          <meta name="description" content="한국형 좀비 아포칼립스 RPG! 이터널시티 확률형 캐시아이템 관련정보를 제공합니다." />
        </Helmet>
        <div className={cx('sub-header')}>
          <div className={cx('header-content-sub')}>
            <div> </div>
            <div className={cx('submenu-title')}>
              <span onClick={() => scrollToComponent(this.BoxListContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>상자선택</span>
              <span onClick={() => scrollToComponent(this.BoxResultContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>뽑기결과</span>
              <span onClick={() => scrollToComponent(this.BoxLogContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>뽑기기록</span>
            </div>
          </div>
        </div>
        <ListWrapper>        
          <BoxListContainer ref={(ref) => this.BoxListContainer = ref}/>
        </ListWrapper>
        <div className={cx('page-middle-adsense')}>
          <Adsense72890/>
          <Adsense320100/>
        </div>
        <ListWrapper>        
          <BoxResultContainer ref={(ref) => this.BoxResultContainer = ref}/>
        </ListWrapper>
        <div className={cx('page-middle-adsense')}>
          <Adsense72890/>
          <Adsense320100/>
        </div>
        <ListWrapper>        
          <BoxLogContainer ref={(ref) => this.BoxLogContainer = ref}/>
        </ListWrapper>
        <div className={cx('page-top-adsense')}>
          <Adsense970250/>
          <Adsense300250/>
        </div>
      </PageTemplate>
    );
  }
}

export default BoxSimulPage;