import React, { Component } from 'react';
import styles from './Adsense300250.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Adsense300250 extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className={cx('adsense-300250')}>
        <ins className="adsbygoogle ad300250"
          style={{display:'inline-block',width:'300px',height:'250px'}}
          data-ad-client="ca-pub-1407998984163880"
          data-ad-slot="5633068152"
        ></ins>
      </div>
    );
  }
}

export default Adsense300250;