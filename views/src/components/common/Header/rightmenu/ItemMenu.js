import React from 'react';
import {Link} from 'react-router-dom';

const innerStyle = {
  marginLeft: "0.4rem"
}

const ItemMenu = () => (
  <div style={{padding: '0.2rem'}}>
    <Link to="/wp">
      무기정보
    </Link>
    <Link to="/custom" style={innerStyle}>
      공격력계산
    </Link>
    <Link to="/plusup" style={innerStyle}>
      플러스업
    </Link>
    <Link to="/boxsim" style={innerStyle}>
      상자뽑기
    </Link>
    {/* <Link to="/login" style={innerStyle}>
      로그인
    </Link> */}
  </div>
);

export default ItemMenu;