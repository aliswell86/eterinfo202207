import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponViewPoweredByContainer from 'containers/weapon/WeaponViewPoweredByContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';

const WeaponViewPage = ({match}) => {
  const {id} = match.params;

  return (
    <PageTemplate>
      <ListWrapper>
        <WeaponViewContainer id={id}/>        
        <WeaponPoweredSelContanier/>
      </ListWrapper>
      <ListWrapper>
        <WeaponViewPoweredByContainer/>                
      </ListWrapper>
    </PageTemplate>
  );
};

export default WeaponViewPage;