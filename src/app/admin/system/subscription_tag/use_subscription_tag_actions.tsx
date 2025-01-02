import services from '@/services/system/subscription_tag';
import { message } from 'antd';

const { createSubscriptionTag } = services.SubscriptionTagController;

export function useSubscriptionTagActions() {
  const handleAdd = async (fields: SubscriptionTagBySystem.SubscriptionTag) => {
    const hide = message.loading('正在添加');
    try {
      await createSubscriptionTag({ ...fields });
      hide();
      message.success('添加成功');
      return true;
    } catch (error) {
      hide();
      message.error('添加失败请重试！');
      return false;
    }
  };

  return {
    handleAdd,
  };
}
