import { domainRecord } from '@/constants';
import {
  LoginFormPage,
  ProConfigProvider,
  ProLayout,
} from '@ant-design/pro-components';
import { Button, Divider, Space, theme } from 'antd';
import type { CSSProperties } from 'react';
import { useState } from 'react';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const Page = () => {
  const [loginType, setLoginType] = useState<LoginType>('phone');
  const { token } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo="/favicon-32x32.png"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="小桃分享社"
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0,0.65)',
          backdropFilter: 'blur(4px)',
        }}
        subTitle="分享、种草"
        activityConfig={{
          style: {
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
            color: token.colorTextHeading,
            borderRadius: 8,
            backgroundColor: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(4px)',
          },
          title: '小桃美妆社',
          subTitle: '让我们一起种草、分享各种攻略吧',
          action: (
            <Button
              size="large"
              style={{
                borderRadius: 20,
                background: token.colorBgElevated,
                color: token.colorPrimary,
                width: 120,
              }}
            >
              去看看
            </Button>
          ),
        }}
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Divider plain></Divider>
            <Space align="center" size={24}></Space>
          </div>
        }
        submitter={{
          submitButtonProps: {
            children: <span>1</span>,
            title: '1',
          },
          resetButtonProps: {
            children: <span>1</span>,
          },
        }}
      ></LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider dark>
      <ProLayout
        headerRender={() => null}
        menuRender={() => null}
        footerRender={() => {
          return (
            <a
              style={{
                position: 'absolute',
                textAlign: 'center',
                padding: '10px',
                color: '#fff',
                zIndex: 1,
                bottom: '10px',
                left: 0,
                right: 0,
                margin: 'auto',
              }}
              href="https://beian.miit.gov.cn/"
              target="_blank"
            >
              {domainRecord}
            </a>
          );
        }}
        style={{ padding: 0, margin: 0 }}
        contentStyle={{ padding: 0 }}
      >
        <Page />
      </ProLayout>
    </ProConfigProvider>
  );
};
