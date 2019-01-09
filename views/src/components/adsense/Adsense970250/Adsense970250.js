import React, { Component } from 'react';
import styles from './Adsense970250.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Adsense970250 extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className={cx('adsense-970250')}>
        <ins className="adsbygoogle ad970250"
          style={{display:'inline-block', width:'970px', maxHeight:'250px'}}
          data-ad-client="ca-pub-1407998984163880"
          data-ad-slot="6481725676"
        ></ins>
      </div>
    );
  }
}

export default Adsense970250;