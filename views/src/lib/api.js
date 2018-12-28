import axios from 'axios';
// import queryString from 'query-string';

export const getWeaponList = () => axios.get('/api/item/weapon');
export const getWeaponView = (id) => axios.get(`/api/item/weapon/${id}`);
export const getPlusUpGrid = () => axios.get('/api/item/plusup');