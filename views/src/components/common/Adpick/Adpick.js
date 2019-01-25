import React from 'react';
import styles from './Adpick.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Adpick = ({adpickList}) => {
  const list = adpickList.map((adpick, cnt) => {
    const {a_href, img_src, name} = adpick;

    return (
      <div className={cx('adpick')} key={cnt}>
        <div className={cx('adpick-link')}>
          <a rel="noopener noreferrer" target='_blank' href={a_href}>
            <img className={cx('adpick-img')} src={img_src} alt={name}/>
          </a>
        </div>
        <div className={cx('adpick-title')}>
          {/* {name} */}
        </div>
      </div>
    );
  });

  return (
    <div className={cx('adpick-list')}>
      {list}
    </div>
  );
};

export default Adpick;