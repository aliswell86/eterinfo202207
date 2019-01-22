import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SearchInputContainer from 'containers/search/SearchInputContainer';
import Adsense970250 from 'components/adsense/Adsense970250';

const MainPage = () => {
  return (
    <PageTemplate>
      <Adsense970250/>
      <SearchInputContainer/>
    </PageTemplate>
  );
};

export default MainPage;