import React from 'react';
import ModalWrapper from 'components/modal/ModalWrapper';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginModal = ({visible, href, onCancel, callback}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('form')}>
        <div className={cx('close')} onClick={onCancel}>&times;</div>
        <div className={cx('login-head')}>
          <div className={cx('login-img')}><img src='/resource/img/login_girl.jpg' alt='login_girl'/></div>
          <div className={cx('title')}>이터인포 로그인</div>
        </div>
        <div className={cx('login-body')}>
          <a href={href}><img src='http://static.nid.naver.com/oauth/small_g_in.PNG' alt='네이버 로그인'/></a>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default LoginModal;