import { defineConfig } from '@umijs/max';

export const ShareRoutes: Parameters<typeof defineConfig>[0]['routes'] = [
  {
    name: '分享',
    path: '/share',
    layout: false,
    component: '@/pages/share',
    routes: [
      {
        name: '主页',
        path: '/share/home',
        component: '@/pages/share/home',
      },
      {
        name: '搜索',
        path: '/share/search',
        component: '@/pages/share/search',
      },
      {
        name: '种草分享',
        path: '/share/recommend',
        component: '@/pages/share/recommend',
      },
      {
        name: '关于',
        path: '/share/about',
        component: '@/pages/share/about',
      },
    ],
  },
];
