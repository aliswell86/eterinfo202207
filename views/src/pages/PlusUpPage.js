import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Helmet } from "react-helmet";
import ListWrapper from 'components/list/ListWrapper';
import PlusUpGridContainer from 'containers/plusup/PlusUpGridContainer';
import PlusUpSimulContainer from 'containers/plusup/PlusUpSimulContainer';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';

const PlusUpPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>이터인포 - 플러스업(이터널시티 방어구)</title>
        <meta name="description" content="한국형 좀비 아포칼립스 RPG! 이터널시티 방어구의 플러스업 관련정보를 제공합니다." />
      </Helmet>
      <Adsense970250/>
      <ListWrapper>        
        <PlusUpGridContainer/>
      </ListWrapper>
      <ListWrapper>        
        <PlusUpSimulContainer/>
      </ListWrapper>
      <Adsense300250/>
    </PageTemplate>
  );
};

export default PlusUpPage;