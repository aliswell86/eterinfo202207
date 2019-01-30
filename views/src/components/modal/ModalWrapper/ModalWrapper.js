import React, { Component } from 'react';
import styles from './ModalWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ModalWrapper extends Component {

  render() {
    const {children, visible} = this.props;
    const animation = visible ? 'enter' : 'leave';

    return (
      <div>
        <div className={cx('gray-background', animation)}/>
        <div className={cx('modal-wrapper')}>
          <div className={cx('modal', animation)}>
            {children}
          </div>
        </div>
      </div>
    );
  }

}

export default ModalWrapper;
