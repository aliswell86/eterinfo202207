import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';
import MySpecInvenContainer from 'containers/myspec/MySpecInvenContainer';
import MyInfoViewContainer from 'containers/myspec/MyInfoViewContainer';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';

const WeaponCustomPage = ({match}) => {
  const {id} = match.params;
  const weaponId = id === undefined ? '' : id;

  return (
    <PageTemplate>
      <Adsense970250/>
      <ListWrapper>        
        <WeaponViewContainer id={weaponId}/>
        <WeaponPoweredSelContanier/>
      </ListWrapper>
      <Adsense300250/>
      <ListWrapper>
        <MyInfoViewContainer/>
      </ListWrapper>
      <ListWrapper>
        <MySpecInvenContainer/>
      </ListWrapper>
      <Adsense300250/>
    </PageTemplate>
  )
}

export default WeaponCustomPage;