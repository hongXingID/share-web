import { defineConfig } from '@umijs/max';

export const BlogRoutes: Parameters<typeof defineConfig>[0]['routes'] = [
  {
    path: '/',
    layout: false,
    component: '@/app/blog',
  },
];
