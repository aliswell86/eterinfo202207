import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';
import MySpecInvenContainer from 'containers/myspec/MySpecInvenContainer';
import MyInfoViewContainer from 'containers/myspec/MyInfoViewContainer';

const WeaponCustomPage = ({match}) => {
  const {id} = match.params;
  const weaponId = id === undefined ? '' : id;

  return (
    <PageTemplate>
      <ListWrapper>        
        <WeaponViewContainer id={weaponId}/>
        <WeaponPoweredSelContanier/>
      </ListWrapper>
      <ListWrapper>
        <MyInfoViewContainer/>
      </ListWrapper>
      <ListWrapper>
        <MySpecInvenContainer/>
      </ListWrapper>      
    </PageTemplate>
  )
}

export default WeaponCustomPage;