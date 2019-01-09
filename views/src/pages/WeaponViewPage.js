import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponViewPoweredByContainer from 'containers/weapon/WeaponViewPoweredByContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';
import UpgradeCostContainer from 'containers/upgrade/UpgradeCostContainer';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense72890 from 'components/adsense/Adsense72890';
import Adsense300250 from 'components/adsense/Adsense300250';

const WeaponViewPage = ({match}) => {
  const {id} = match.params;
  const weaponId = id === undefined ? '' : id;
  
  return (
    <PageTemplate>
      <Adsense970250/>
      <ListWrapper>
        <WeaponViewContainer id={weaponId}/>
        <WeaponPoweredSelContanier/>
      </ListWrapper>
      <Adsense72890/>
      <ListWrapper>
        <UpgradeCostContainer/>                
      </ListWrapper>
      <Adsense300250/>
      <ListWrapper>
        <WeaponViewPoweredByContainer/>                
      </ListWrapper>
      <Adsense300250/>
    </PageTemplate>
  );
};

export default WeaponViewPage;