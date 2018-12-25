import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponCustomListContainer from 'containers/list/WeaponCustomListContainer';
import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';
import MySpecInvenContainer from 'containers/myspec/MySpecInvenContainer';
import MyInfoViewContainer from 'containers/myspec/MyInfoViewContainer';
import queryString from 'query-string';

const WeaponCustomPage = ({location, history}) => {
  const query = queryString.parse(location.search);
  
  return (
    <PageTemplate>
      <WeaponWhereBoxContainer/>
      <ListWrapper>                
        <WeaponCustomListContainer history={history}/>
      </ListWrapper>
      <ListWrapper>        
        <WeaponViewContainer id={query.id}/>
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