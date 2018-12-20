import axios from 'axios';
// import queryString from 'query-string';

export const getWeaponList = () => axios.get('/api/item/weapon');