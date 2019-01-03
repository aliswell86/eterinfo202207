import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {WeaponPage, WeaponViewPage, WeaponCustomPage, MainPage, PlusUpPage, BoxSimulPage} from 'pages';
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 모든 정보</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/wp" component={WeaponPage} />
          <Route exact path="/wp/:id" component={WeaponViewPage} />
          <Route exact path="/custom" component={WeaponCustomPage} />
          <Route exact path="/custom/:id" component={WeaponCustomPage} />
          <Route exact path="/plusup" component={PlusUpPage} />
          <Route exact path="/boxsim" component={BoxSimulPage} />
        </Switch>
      </div>
    );
  }
}

export default App;