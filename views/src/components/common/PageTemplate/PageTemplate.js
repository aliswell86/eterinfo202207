import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import {Adsense300600, Adsense300601} from 'components/adsense/Adsense300600';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
  <div className={cx('page-template')}>
    <Header/>
    <main>
      {children}
      <Adsense300600/>
      <Adsense300601/>
    </main>
    <Footer/>
  </div>
);

export default PageTemplate;