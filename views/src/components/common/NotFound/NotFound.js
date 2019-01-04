import React from 'react';
import styles from './NotFound.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NotFound = ({onGoBack}) => (
  <div className={cx('not-found')}>
    <h2>
      존재하지 않는 페이지입니다.
    </h2>
    <button onClick={onGoBack}>
      돌아가기
    </button>
  </div>
);

export default NotFound;