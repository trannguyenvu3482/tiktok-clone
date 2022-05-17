import { Home, Following, Profile, Upload, Search } from '../pages';
import { DefaultLayout, HeaderOnly } from '../components/Layout';

const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/following', component: Following, layout: DefaultLayout },
  { path: '/profile', component: Profile, layout: DefaultLayout },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
