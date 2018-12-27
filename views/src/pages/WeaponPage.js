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
        <meta name="description" content="한국형 좀비 아포칼립스 RPG! 이터널시티의 무기목록 및 강화별 공격력을 확인합니다." />
      </Helmet>
      <WeaponWhereBoxContainer/>
      <ListWrapper>        
        <WeaponListContainer history={history}/>
      </ListWrapper>
    </PageTemplate>
  )
}

export default WeaponPage;