import { history } from '@umijs/max';
import { Button, Result } from 'antd';

export default function NoFound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="找不到页面"
        extra={
          <Button
            type="primary"
            onClick={() => {
              history.replace('/');
            }}
          >
            返回首页
          </Button>
        }
      />
    </div>
  );
}
