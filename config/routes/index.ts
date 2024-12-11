import { defineConfig } from '@umijs/max';

const routes: Parameters<typeof defineConfig>[0]['routes'] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: '@/pages/access',
  },
  {
    name: 'wechaty',
    path: '/wechaty',
    routes: [
      {
        name: '实例列表',
        path: '/wechaty/instance',
        component: '@/pages/wechaty/instance',
      },
      {
        name: '功能调试',
        path: '/wechaty/debugger',
        component: '@/pages/wechaty/debugger',
      },
    ],
  },
  {
    name: '系统管理',
    path: '/system',
    routes: [
      {
        name: '用户管理',
        path: '/system/user',
        component: '@/pages/system/user',
      },
      {
        name: '角色管理',
        path: '/system/role',
        component: '@/pages/system/role',
      },
      {
        name: '订阅标签',
        path: '/system/subscription_tag',
        component: '@/pages/system/subscription_tag',
      },
      {
        name: '系统设置',
        path: '/system/setting',
        component: '@/pages/system/setting',
      },
    ],
  },
  {
    path: '/login',
    component: '@/pages/login',
    name: '登录',
    layout: false,
  },
];

export default routes;
