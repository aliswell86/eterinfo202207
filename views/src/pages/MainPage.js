import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SearchInputContainer from 'containers/search/SearchInputContainer';
import BestWeaponContainer from 'containers/weapon/BestWeaponContainer';
import ListWrapper from 'components/list/ListWrapper';
import Adsense970250 from 'components/adsense/Adsense970250';
import Adsense300250 from 'components/adsense/Adsense300250';
import styles from './page.scss';
import classNames from 'classnames/bind';

const MainPage = () => {
  const cx = classNames.bind(styles);

  return (
    <PageTemplate>
      <div className={cx('page-top-adsense')}>
        <Adsense970250/>
        <Adsense300250/>
      </div>
      <SearchInputContainer/>
      <ListWrapper>
        <BestWeaponContainer/>
      </ListWrapper>
    </PageTemplate>
  );
};

export default MainPage;