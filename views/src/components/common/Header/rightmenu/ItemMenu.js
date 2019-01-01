import React from 'react';
import {Link} from 'react-router-dom';

const innerStyle = {
  marginLeft: "0.4rem"
}

const ItemMenu = () => (
  <div>
    <Link to="/wp">
      무기조회
    </Link>
    <Link to="/custom" style={innerStyle}>
      커스터마이징
    </Link>
    <Link to="/plusup" style={innerStyle}>
      플러스업
    </Link>
    <Link to="/boxsim" style={innerStyle}>
      상자뽑기
    </Link>
  </div>
);

export default ItemMenu;