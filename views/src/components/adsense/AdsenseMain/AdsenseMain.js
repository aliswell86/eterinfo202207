import React, { Component } from 'react';

class AdsenseMain extends Component {

  componentDidMount() {
    console.log("AdsenseMain");
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-1407998984163880",
      enable_page_level_ads: true
    });
  }

  render() {
    return (
      <div>
        <ins className="adsbygoogle ad320100"
          style={{display: 'inline-block', width: '320px', height: '100px'}}
          data-ad-client="ca-pub-1407998984163880"
          data-ad-slot="1164833709"
        ></ins>
      </div>
    );
  }
}

export default AdsenseMain;