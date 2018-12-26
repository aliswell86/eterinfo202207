import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponListContainer from 'containers/list/WeaponListContainer';
import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';
import { Helmet } from "react-helmet";

const WeaponPage = ({history}) => {
  return (
    <PageTemplate>
      <Helmet>
        <title>이터인포 - 이터널시티 무기</title>          
      </Helmet>
      <WeaponWhereBoxContainer/>
      <ListWrapper>        
        <WeaponListContainer history={history}/>
      </ListWrapper>
    </PageTemplate>
  )
}

export default WeaponPage;