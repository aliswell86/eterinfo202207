import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';

const WeaponViewPage = ({match}) => {
  const {id} = match.params;

  return (
    <PageTemplate>
      <ListWrapper>        
        <WeaponViewContainer id={id}/>
      </ListWrapper>      
    </PageTemplate>
  );
};

export default WeaponViewPage;