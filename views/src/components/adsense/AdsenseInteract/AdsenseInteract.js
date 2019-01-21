import React, { Component } from 'react';
import styles from './AdsenseInteract.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class AdsenseInteract extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  
  render() {
    return (
      <div className={cx('adsense-interact')}>
        <ins className="adsbygoogle interact"
          style={{display: 'block'}}
          data-ad-client="ca-pub-1407998984163880"
          data-ad-slot="4971623568"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

export default AdsenseInteract;