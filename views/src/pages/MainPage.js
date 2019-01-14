import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SearchInputContainer from 'containers/search/SearchInputContainer';
import Notice from 'components/common/Notice';
import Adsense970250 from 'components/adsense/Adsense970250';
// import Adsense300250 from 'components/adsense/mainpage/Adsense300250';
// import Adsense72890 from 'components/adsense/mainpage/Adsense72890';

const MainPage = () => {
  return (
    <PageTemplate>
      <Notice/>
      <Adsense970250/>
      <SearchInputContainer/>
      {/* <Adsense300250/> */}
      {/* <Adsense72890/> */}
    </PageTemplate>
  );
};

export default MainPage;