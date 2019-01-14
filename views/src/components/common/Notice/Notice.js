import React, { Component } from 'react';
import ListWrapper from 'components/list/ListWrapper';
import styles from './Notice.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Notice extends Component {
  render() {
    return (
      // <ListWrapper>
        <div className={cx('notice-body')} onClick={() => window.open(`https://www.google.com/intl/ko_ALL/chrome/`)}>
          이 웹페이지는 크롬브라우져에 최적화 되어있습니다.
          [설치하러가기]
        </div>
      // </ListWrapper>
    );
  }
}

export default Notice;