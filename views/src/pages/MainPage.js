import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Helmet } from "react-helmet";
import SearchInputContainer from 'containers/search/SearchInputContainer';
import Adsense970250 from 'components/adsense/mainpage/Adsense970250';
import Adsense300250 from 'components/adsense/mainpage/Adsense300250';
// import Adsense72890 from 'components/adsense/mainpage/Adsense72890';

const MainPage = () => {
  return (
    <PageTemplate>
      <Helmet>
        <title>이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 모든정보!</title>
        <meta name="description" content="이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 모든정보!" />
      </Helmet>
      <Adsense970250/>
      <SearchInputContainer/>
      <Adsense300250/>
      {/* <Adsense72890/> */}
    </PageTemplate>
  );
};

export default MainPage;