import React from 'react';
import ModalWrapper from 'components/modal/ModalWrapper';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginModal = ({visible, onCancel, naverLogin}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('form')}>
        <div className={cx('close')} onClick={onCancel}>&times;</div>
        <div className={cx('login-head')}>
          <div className={cx('login-img')}><img src='/resource/img/login_girl.jpg' alt='login_girl'/></div>
          <div className={cx('title')}>이터인포 로그인</div>
        </div>
        <div className={cx('login-body')}>
          <img src='/resource/img/naver_id_login.png' alt='네이버 로그인' onClick={naverLogin}/>
        </div>
        <a href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=TzAMy0C4TJMXLng6Knct&redirect_uri=/api/auth/naverlogincallback&state=RAMDOM_STATE'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>
      </div>
    </ModalWrapper>
  );
};

export default LoginModal;