// Pages
import { Following, Home, Live, Profile, Search, Upload } from '../pages';

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
  { path: routes.live, component: Live, layout: DefaultLayout },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
