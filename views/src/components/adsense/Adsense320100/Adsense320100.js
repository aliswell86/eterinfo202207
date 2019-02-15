import React, { Component } from 'react';
import styles from './Adsense320100.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Adsense320100 extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  
  render() {
    return (
      <div className={cx('adsense-320100')}>
        <ins className="adsbygoogle ad320100"
          style={{display: 'inline-block', width: '320px', height: '100px'}}
          data-ad-client="ca-pub-1407998984163880"
          data-ad-slot="1164833709"
        ></ins>
      </div>
    );
  }
}

export default Adsense320100;