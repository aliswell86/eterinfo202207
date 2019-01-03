import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponViewPoweredByContainer from 'containers/weapon/WeaponViewPoweredByContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';
import UpgradeCostContainer from 'containers/upgrade/UpgradeCostContainer';

const WeaponViewPage = ({match}) => {
  const {id} = match.params;
  const weaponId = id === undefined ? '' : id;
  
  return (
    <PageTemplate>
      <ListWrapper>
        <WeaponViewContainer id={weaponId}/>
        <WeaponPoweredSelContanier/>
      </ListWrapper>
      <ListWrapper>
        <UpgradeCostContainer/>                
      </ListWrapper>
      <ListWrapper>
        <WeaponViewPoweredByContainer/>                
      </ListWrapper>
    </PageTemplate>
  );
};

export default WeaponViewPage;