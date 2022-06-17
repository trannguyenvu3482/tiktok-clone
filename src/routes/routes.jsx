// Pages
import { Home, Following, Profile, Upload, Search } from '../pages';

// Layouts
import { DefaultLayout, HeaderOnly } from '~/layouts';

// Config
import { routes } from '~/config';

// Public routes
const publicRoutes = [
  { path: routes.home, component: Home, layout: DefaultLayout },
  { path: routes.following, component: Following, layout: DefaultLayout },
  { path: routes.profile, component: Profile, layout: DefaultLayout },
  { path: routes.upload, component: Upload, layout: HeaderOnly },
  { path: routes.search, component: Search, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
