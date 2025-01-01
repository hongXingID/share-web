import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  title: '小桃的美妆社区',
  antd: {},
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes,
  npmClient: 'pnpm',
  proxy: {
    '/api/v1': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
  },
  exportStatic: {},
  links: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  hash: true,
});
