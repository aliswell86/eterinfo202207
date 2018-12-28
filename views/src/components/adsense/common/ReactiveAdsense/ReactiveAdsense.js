import React, { Component, Fragment } from 'react';

class ReactiveAdsense extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  
  render() {
    return (
      <Fragment>
        <ins className="adsbygoogle"
          style={{display: 'block'}}
          data-ad-client="ca-pub-1407998984163880"
          data-ad-slot="4971623568"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      </Fragment>
    );
  }
}

export default ReactiveAdsense;