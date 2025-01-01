import { defineConfig } from '@umijs/max';

export const CMSRoutes: Parameters<typeof defineConfig>[0]['routes'] = [
  {
    name: 'cms',
    path: '/cms',
    layout: false,
    component: '@/pages/cms',
  },
];
