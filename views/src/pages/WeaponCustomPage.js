import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';
import MySpecInvenContainer from 'containers/myspec/MySpecInvenContainer';
import MyInfoViewContainer from 'containers/myspec/MyInfoViewContainer';
import DPSSimulContainer from 'containers/myspec/DPSSimulContainer';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';
import Adsense72890 from 'components/adsense/Adsense72890';
import scrollToComponent from 'react-scroll-to-component';
import styles from './page.scss';
import classNames from 'classnames/bind';

class WeaponCustomPage extends Component {
  render() {
    const {id} = this.props.match.params;
    const weaponId = id === undefined ? '' : id;
    const cx = classNames.bind(styles);
    
    return (
      <PageTemplate>
        <div className={cx('sub-header')}>
          <div className={cx('header-content-sub')}>
            <div> </div>
            <div className={cx('submenu-title')}>
              <span onClick={() => scrollToComponent(this.WeaponViewContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>무기변경</span>
              <span onClick={() => scrollToComponent(this.MyInfoViewContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>인벤정보</span>
              <span onClick={() => scrollToComponent(this.MySpecInvenContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>세팅설정</span>
              <span onClick={() => scrollToComponent(this.DPSSimulContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>사냥시뮬</span>
            </div>
          </div>
        </div>
        <div className={cx('page-top-adsense')}>
          <Adsense970250/>
          <Adsense300250/>
        </div>
        <ListWrapper>        
          <WeaponViewContainer id={weaponId} ref={(ref) => this.WeaponViewContainer = ref}/>
          <WeaponPoweredSelContanier/>
        </ListWrapper>
        <Adsense72890/>
        <ListWrapper>
          <MyInfoViewContainer ref={(ref) => this.MyInfoViewContainer = ref}/>
        </ListWrapper>      
        <Adsense72890/>
        <ListWrapper>
          <MySpecInvenContainer ref={(ref) => this.MySpecInvenContainer = ref}/>
        </ListWrapper>
        <Adsense72890/>
        <ListWrapper>
          <DPSSimulContainer ref={(ref) => this.DPSSimulContainer = ref}/>
        </ListWrapper>
        <Adsense300250/>
      </PageTemplate>
    );
  }
}

export default WeaponCustomPage;