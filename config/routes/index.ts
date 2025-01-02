import { defineConfig } from '@umijs/max';
import { AdminRoutes } from './admin';
import { BlogRoutes } from './blog';
import { CMSRoutes } from './cms';
import { ShareRoutes } from './share';

const routes: Parameters<typeof defineConfig>[0]['routes'] = [
  ...(BlogRoutes as []),
  ...(AdminRoutes as []),
  ...(ShareRoutes as []),
  ...(CMSRoutes as []),
  { path: '/*', component: '@/components/no_found' },
];

export default routes;
