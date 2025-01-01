import {
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { history, Outlet, useLocation } from '@umijs/max';

import { Input, message, theme } from 'antd';

import { domainRecord } from '@/constants';
import { Empty } from 'antd';
import defaultProps from './_defaultProps';

const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();
  return (
    <div>
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

export default () => {
  const location = useLocation();

  const isEmptyShow = ['/share'].includes(location.pathname);
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        menu={{
          type: 'group',
        }}
        title="小桃分享社"
        logo={false}
        avatarProps={false}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  variant="borderless"
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              if (item.disabled) {
                return message.warning('功能暂未开放，敬请期待');
              }
              history.push(item.path || '/home');
            }}
          >
            {dom}
          </a>
        )}
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <a
              onClick={() => {
                console.log('titheaderTitle clicked');
              }}
            >
              {logo}
              {title}
            </a>
          );
          if (
            typeof document === 'undefined' ||
            document.body.clientWidth < 1400
          ) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return <>{defaultDom}</>;
        }}
        layout="mix"
        fixedHeader
        fixSiderbar
        contentStyle={{ margin: 0, padding: 0 }}
        footerRender={() => (
          <a
            style={{ textAlign: 'center', padding: '10px', color: 'inherit' }}
            href="https://beian.miit.gov.cn/"
            target="_blank"
          >
            {domainRecord}
          </a>
        )}
      >
        {isEmptyShow ? <Empty /> : <Outlet />}
      </ProLayout>
    </div>
  );
};
