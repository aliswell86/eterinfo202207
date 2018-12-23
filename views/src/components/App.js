import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {WeaponPage, WeaponViewPage, WeaponCustomPage} from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={WeaponPage} />
          <Route exact path="/item/wp" component={WeaponPage} />
          <Route exact path="/item/wp/:id" component={WeaponViewPage} />
          <Route path="/custom" component={WeaponCustomPage} />
        </Switch>
      </div>
    );
  }
}

export default App;