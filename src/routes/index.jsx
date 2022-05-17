import { Home, Following, Profile, Upload } from '../pages';
import { DefaultLayout, HeaderOnly } from '../components/Layout';

const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/following', component: Following, layout: DefaultLayout },
  { path: '/profile', component: Profile, layout: DefaultLayout },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
