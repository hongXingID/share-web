import {
  ChromeFilled,
  HomeOutlined,
  SearchOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/share',
        name: '主页',
        icon: <HomeOutlined />,
      },
      {
        path: '/share/search',
        name: '搜索',
        icon: <SearchOutlined />,
        disabled: true,
      },
      {
        name: '种草分享',
        icon: <ShareAltOutlined />,
        path: '/share/recommend',
        disabled: true,
      },
      {
        path: 'https://ant.design',
        name: '分享网站',
        icon: <ChromeFilled />,
        disabled: true,
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: <span>百</span>,
      title: '百亿补贴',
      desc: '聚划算',
      url: '/cms/bybt.html',
      target: '_blank',
    },
    {
      icon: <span>线</span>,
      title: '线报中心',
      desc: '一手羊毛抢先知',
      url: '/cms/xbzx.html',
      target: '_blank',
    },
    {
      icon: <span>咚</span>,
      title: '咚咚抢',
      desc: '整点好物抢购',
      url: '/cms/ddq.html',
      target: '_blank',
    },
    {
      icon: <span>折</span>,
      title: '折上折',
      desc: '精品折上折',
      url: '/cms/zsz.html',
      target: '_blank',
    },
    {
      icon: <span>9.9</span>,
      title: '9.9包邮',
      desc: '包邮到家',
      url: '/cms/9.9.html',
      target: '_blank',
    },
    {
      icon: <span>9.疯</span>,
      title: '疯抢榜',
      desc: '好货疯抢',
      url: '/cms/fqb.html',
      target: '_blank',
    },
  ],
};
