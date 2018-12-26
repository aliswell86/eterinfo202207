import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {WeaponPage, WeaponViewPage, WeaponCustomPage} from 'pages';
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 모든 정보</title>          
          <meta name='description' content='이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 모든정보!' />
          <meta name='keywords' content='이터널시티 무기,이터널시티 용병,이터널시티 불법무기,이터널시티 정보,이터널시티 아이템,이터널시티 공격력,이터널시티 시뮬레이션' />
          <meta property='og:title' content='이터인포'/>
          <meta property='og:url' content='http://eterinfo.kr/'/>
          <meta property='og:image' content='http://eterinfo.kr/resource/img/tit_img.png'/>
          <meta property='og:description' content='이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 모든정보!'/>
        </Helmet>
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