import React from 'react';
import styles from './Radio.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Radio = ({name, value, disabled, children, onChange, defaultValue}) => {
  const isChecked = defaultValue === value ? true : false;
  const isCheckedClassNm = isChecked ? '-checked' : '';
  return (
    <label className={cx('radio-wrapper')}>
      <span className={cx(`radio${isCheckedClassNm}`)}>
        <input className={cx('radio-input')} type='radio' name={name} value={value} onChange={onChange} disabled={disabled} checked={isChecked}/>
        <span className={cx('radio-inner')}></span>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Radio;