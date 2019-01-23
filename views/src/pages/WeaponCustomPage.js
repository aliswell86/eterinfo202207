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

class WeaponCustomPage extends Component {
  render() {
    const {id} = this.props.match.params;
    const weaponId = id === undefined ? '' : id;
    
    return (
      <PageTemplate>
        <div style={{position: 'fixed', backgroundColor: 'violet', display: 'block'}}>
          <div onClick={() => scrollToComponent(this.WeaponViewContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>무기변경</div>
          <div onClick={() => scrollToComponent(this.MyInfoViewContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>인벤정보</div>
          <div onClick={() => scrollToComponent(this.MySpecInvenContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>세팅설정</div>
          <div onClick={() => scrollToComponent(this.DPSSimulContainer, { offset: -100, align: 'top', duration: 100})} style={{marginRight: '0.4rem'}}>사냥시뮬</div>
        </div>
        <Adsense970250/>
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

// const WeaponCustomPage = ({match}) => {
//   const {id} = match.params;
//   const weaponId = id === undefined ? '' : id;

//   return (
//     <PageTemplate>
//       <Adsense970250/>
//       <ListWrapper>        
//         <WeaponViewContainer id={weaponId} ref={(ref) => this.WeaponViewContainer = ref}/>
//         <WeaponPoweredSelContanier/>
//       </ListWrapper>
//       <Adsense72890/>
//       <ListWrapper>
//         <MyInfoViewContainer/>
//       </ListWrapper>      
//       <Adsense72890/>
//       <ListWrapper>
//         <MySpecInvenContainer/>
//       </ListWrapper>
//       <Adsense72890/>
//       <ListWrapper>
//         <DPSSimulContainer/>
//       </ListWrapper>
//       <Adsense300250/>
//     </PageTemplate>
//   )
// }

// export default WeaponCustomPage;