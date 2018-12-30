import React, { Component, Fragment } from 'react';

class Adsense300601 extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <Fragment>
        <ins class="adsbygoogle ad300600-1"
            style={{display:'inline-block', width:'300px', height:'600px', border: 'solid 1px black'}}
            data-ad-client="ca-pub-1407998984163880"
            data-ad-slot="1583857871"></ins>
      </Fragment>
    );
  }
}

export default Adsense300601;