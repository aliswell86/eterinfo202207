import React from 'react';
import styles from './Checkbox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Checkbox = ({name, checked, disabled, children, onChange}) => {
  const isCheckedClassNm = checked ? '-checked' : '';

  return (
    <label className={cx('checkbox-wrapper')}>
      <span className={cx(`checkbox${isCheckedClassNm}`)}>
        <input className={cx('checkbox-input')} type='checkbox' name={name} checked={checked} onChange={onChange} disabled={disabled}/>
        <span className={cx('checkbox-inner')}></span>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;