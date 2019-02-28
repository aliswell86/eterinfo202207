import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {
  NotFoundPage, WeaponPage, WeaponViewPage, WeaponCustomPage, MainPage, PlusUpPage, BoxSimulPage,
  ArmmorPage, CostumePage, AccessoryPage
} from 'pages';
import { Helmet } from "react-helmet";
// import BaseContainer from 'containers/common/BaseContainer';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-123320555-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return null;  
}

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 모든 정보</title>
        </Helmet>
        <Route path="/" component={logPageView} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/wp" component={WeaponPage} />
          <Route exact path="/wp/:id" component={WeaponViewPage} />
          <Route exact path="/custom" component={WeaponCustomPage} />
          <Route exact path="/custom/:id" component={WeaponCustomPage} />
          <Route exact path="/plusup" component={PlusUpPage} />
          <Route exact path="/boxsim" component={BoxSimulPage} />
          <Route exact path="/armmor" component={ArmmorPage} />
          <Route exact path="/costume" component={CostumePage} />
          <Route exact path="/accessory" component={AccessoryPage} />
          <Route component={NotFoundPage}/>
        </Switch>
        {/* <BaseContainer/> */}
      </div>
    );
  }
}

export default App;