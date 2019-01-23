import React from 'react';
import {Link} from 'react-router-dom';

const innerStyle = {
  marginLeft: "0.4rem"
}

const ItemMenu = () => (
  <div style={{padding: '0.2rem'}}>
    <a href="/wp">
      무기정보
    </a>
    <a href="/custom" style={innerStyle}>
      공격력계산
    </a>
    <a href="/plusup" style={innerStyle}>
      플러스업
    </a>
    <a href="/boxsim" style={innerStyle}>
      상자뽑기
    </a>
  </div>
);

export default ItemMenu;