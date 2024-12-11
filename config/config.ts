import { defineConfig } from '@umijs/max';
import routes from './routes';
const { PROJECT_ENV } = process.env;
console.log(PROJECT_ENV, 'PROJECT_ENV');

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
      changeOrigin: true
    },
  },
  exportStatic:{}
});
