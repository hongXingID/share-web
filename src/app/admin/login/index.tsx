import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

const LoginPage: React.FC = () => {
  const { name } = useModel('global');
  return <PageContainer ghost>login</PageContainer>;
};

export default LoginPage;
