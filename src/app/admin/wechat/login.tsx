import DogBg from '@/assets/images/dog-bg.jpeg';
import WechatyServices from '@/services/wechaty';
import { LoginFormPage, ProConfigProvider } from '@ant-design/pro-components';
import { Button, QRCode, theme } from 'antd';
import { useEffect } from 'react';
const { createWechaty } = WechatyServices.wechatyController;

const Page = () => {
  const { token } = theme.useToken();
  const fetchQrCode = async () => {
    const result = await createWechaty({ name: Math.random().toString() });
    console.log(result, 'rr');
  };

  useEffect(() => {
    fetchQrCode();
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      <LoginFormPage
        backgroundImageUrl={DogBg}
        logo=""
        // backgroundVideoUrl=""
        title="wechat"
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0,0.65)',
          backdropFilter: 'blur(4px)',
        }}
        subTitle="请先扫码，微信确认登陆之后再点击跳转"
        activityConfig={{
          style: {
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
            color: token.colorTextHeading,
            borderRadius: 8,
            backgroundColor: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(4px)',
          },
          title: '微信网页版',
          subTitle: '微信Web版',
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
        submitter={{
          submitButtonProps: {
            onClick() {
              console.log('FF');
            },
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <QRCode value="1"></QRCode>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default function WechatLogin() {
  return (
    <ProConfigProvider dark>
      <Page />
    </ProConfigProvider>
  );
}
