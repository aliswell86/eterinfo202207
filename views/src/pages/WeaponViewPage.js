import React, {Component} from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponViewPoweredByContainer from 'containers/weapon/WeaponViewPoweredByContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';
import UpgradeCostContainer from 'containers/upgrade/UpgradeCostContainer';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense72890 from 'components/adsense/Adsense72890';
import Adsense300250 from 'components/adsense/Adsense300250';
import scrollToComponent from 'react-scroll-to-component';
import styles from './page.scss';
import classNames from 'classnames/bind';

class WeaponViewPage extends Component {
  
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
              <span onClick={() => scrollToComponent(this.UpgradeCostContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>강화비용</span>
              <span onClick={() => scrollToComponent(this.WeaponViewPoweredByContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>강화별공격력</span>
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
          <UpgradeCostContainer ref={(ref) => this.UpgradeCostContainer = ref}/>
        </ListWrapper>
        <Adsense72890/>
        <ListWrapper>
          <WeaponViewPoweredByContainer ref={(ref) => this.WeaponViewPoweredByContainer = ref}/>
        </ListWrapper>
        <Adsense300250/>
      </PageTemplate>
    );
  }
}

export default WeaponViewPage;