import React, { Component } from 'react';
import styles from './Adsense300600.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Adsense300600 extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className={cx('adsense-300600')}>
        <ins className="adsbygoogle ad300600"
          style={{display:'inline-block', width:'300px', height:'600px'}}
          data-ad-client="ca-pub-1407998984163880"
          data-ad-slot="1583857871"
        ></ins>
      </div>
    );
  }
}

export default Adsense300600;