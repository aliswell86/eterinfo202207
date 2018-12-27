import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {WeaponPage, WeaponViewPage, WeaponCustomPage, MainPage} from 'pages';
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
          <Route exact path="/item/wp" component={WeaponPage} />
          <Route exact path="/item/wp/:id" component={WeaponViewPage} />
          <Route path="/custom" component={WeaponCustomPage} />
        </Switch>
      </div>
    );
  }
}

export default App;