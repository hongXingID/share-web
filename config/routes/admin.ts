import { defineConfig } from '@umijs/max';

export const AdminRoutes: Parameters<typeof defineConfig>[0]['routes'] = [
  {
    name: '首页',
    path: '/admin/home',
    layout: false,
    component: '@/app/admin/home',
  },
  {
    name: 'wechaty',
    path: '/admin/wechaty',
    routes: [
      {
        name: '实例列表',
        path: '/admin/wechaty/instance',
        component: '@/app/admin/wechaty/instance',
      },
      {
        name: '功能调试',
        path: '/admin/wechaty/debugger',
        component: '@/app/admin/wechaty/debugger',
      },
    ],
  },
  {
    name: '系统管理',
    path: '/admin/system',
    routes: [
      {
        name: '用户管理',
        path: '/admin/system/user',
        component: '@/app/admin/system/user',
      },
      {
        name: '角色管理',
        path: '/admin/system/role',
        component: '@/app/admin/system/role',
      },
      {
        name: '订阅标签',
        path: '/admin/system/subscription_tag',
        component: '@/app/admin/system/subscription_tag',
      },
      {
        name: '系统设置',
        path: '/admin/system/setting',
        component: '@/app/admin/system/setting',
      },
    ],
  },
  {
    path: '/admin/login',
    component: '@/app/admin/login',
    name: '登录',
    layout: false,
  },
  {
    name: 'wechat',
    path: '/admin/wechat',
    layout: false,
    routes: [
      {
        name: '微信登录',
        path: '/admin/wechat/login',
        component: '@/app/admin/wechat/login',
      },
      {
        name: '功能调试',
        path: '/admin/wechat/debugger',
        component: '@/app/admin/wechaty/debugger',
      },
    ],
  },
];
