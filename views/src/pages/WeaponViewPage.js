import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponViewPoweredByContainer from 'containers/weapon/WeaponViewPoweredByContainer';

const WeaponViewPage = ({match}) => {
  const {id} = match.params;

  return (
    <PageTemplate>
      <ListWrapper>
        <WeaponViewContainer id={id}/>        
      </ListWrapper>
      <ListWrapper>
        <WeaponViewPoweredByContainer/>
      </ListWrapper>
    </PageTemplate>
  );
};

export default WeaponViewPage;