import axios from 'axios';
// import queryString from 'query-string';

export const getWeaponList = () => axios.get('/api/item/weapon');
export const getWeaponView = (id) => axios.get(`/api/item/weapon/${id}`);
export const getPlusUpGrid = () => axios.get('/api/item/plusup');
export const getBoxList = () => axios.get('/api/box/list');
export const getAdPickList = () => axios.get('/api/common/adpick');
export const naverLogin = () => axios.get('/api/auth/naverlogin');
export const naverlogincallback = () => axios.get('/api/auth/naverlogincallback');
export const checkLogin = () => axios.get('/api/auth/check');
export const logout = () => axios.get('/api/auth/logout');

export const getArmmorList = () => axios.get('/api/item/armmor');
export const getCostumeList = () => axios.get('/api/item/costume');
export const getAccessoryList = () => axios.get('/api/item/accessory');