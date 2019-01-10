import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Helmet } from "react-helmet";
import ListWrapper from 'components/list/ListWrapper';
import BoxListContainer from 'containers/boxsim/BoxListContainer';
import BoxItemInfoListContainer from 'containers/boxsim/BoxItemInfoListContainer';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';

const BoxSimulPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>이터인포 - 박스뽑기(확률형 캐시아이템)</title>
        <meta name="description" content="한국형 좀비 아포칼립스 RPG! 이터널시티 확률형 캐시아이템 관련정보를 제공합니다." />
      </Helmet>
      <Adsense970250/>
      <ListWrapper>        
        <BoxListContainer/>
      </ListWrapper>
      <BoxItemInfoListContainer/>
      <Adsense300250/>
    </PageTemplate>
  );
};

export default BoxSimulPage;