import asyncComponent from 'lib/asyncComponent';

export const WeaponPage = asyncComponent(() => import('./WeaponPage'));
export const WeaponViewPage = asyncComponent(() => import('./WeaponViewPage'));
export const WeaponCustomPage = asyncComponent(() => import('./WeaponCustomPage'));
export const MainPage = asyncComponent(() => import('./MainPage'));
export const PlusUpPage = asyncComponent(() => import('./PlusUpPage'));
export const BoxSimulPage = asyncComponent(() => import('./BoxSimulPage'));