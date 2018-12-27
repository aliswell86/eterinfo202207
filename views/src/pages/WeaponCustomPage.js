import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import WeaponCustomListContainer from 'containers/list/WeaponCustomListContainer';
// import WeaponWhereBoxContainer from 'containers/wherebox/WeaponWhereBoxContainer';
import WeaponWhereboxAd from 'components/wherebox/WeaponWhereboxAd';
import WeaponViewContainer from 'containers/weapon/WeaponViewContainer';
import WeaponPoweredSelContanier from 'containers/weapon/WeaponPoweredSelContanier';
import MySpecInvenContainer from 'containers/myspec/MySpecInvenContainer';
import MyInfoViewContainer from 'containers/myspec/MyInfoViewContainer';
import queryString from 'query-string';
import { Helmet } from "react-helmet";

const WeaponCustomPage = ({location, history}) => {
  const query = queryString.parse(location.search);
  
  return (
    <PageTemplate>
      <Helmet>
        <title>이터인포 - 커스터마이징</title>
        <meta name="description" content="한국형 좀비 아포칼립스 RPG! 이터널시티의 무기를 착용한것에 대한 자신의 공격력을 미리 알아보는 화면입니다. 모든 스탯과 어떤 아이템을 착용하는가에 따라 공격력이 변화합니다." />
      </Helmet>
      {/* <WeaponWhereBoxContainer/> */}
      <WeaponWhereboxAd/>
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