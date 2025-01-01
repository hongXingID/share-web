import { defineConfig } from '@umijs/max';
import { CMSRoutes } from './cms';
import { ShareRoutes } from './share';

const routes: Parameters<typeof defineConfig>[0]['routes'] = [
  {
    path: '/',
    redirect: '/share/home',
  },
  {
    name: '首页',
    path: '/home',
    layout: false,
    component: '@/pages/home',
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
  {
    name: 'wechat',
    path: '/wechat',
    layout: false,
    routes: [
      {
        name: '微信登录',
        path: '/wechat/login',
        component: '@/pages/wechat/login',
      },
      {
        name: '功能调试',
        path: '/wechat/debugger',
        component: '@/pages/wechaty/debugger',
      },
    ],
  },
  ...(ShareRoutes as []),
  ...(CMSRoutes as []),
];

export default routes;
