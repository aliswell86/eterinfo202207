import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponListContainer from 'containers/list/WeaponListContainer';
import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';

const WeaponPage = () => {
  return (
    <PageTemplate>
      <WeaponWhereBoxContainer/>
      <ListWrapper>        
        <WeaponListContainer/>
      </ListWrapper>      
    </PageTemplate>
  )
}

export default WeaponPage;