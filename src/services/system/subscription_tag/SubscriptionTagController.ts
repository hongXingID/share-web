import { request } from '@umijs/max';

export async function querySubscriptionTagList(
  params: {
    keyword?: string;
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<
    Global.ResponsePageResult<SubscriptionTagBySystem.SubscriptionTag>
  >('/api/v1/subscription-tag', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function createSubscriptionTag(
  data: Omit<SubscriptionTagBySystem.SubscriptionTag, 'tag_id'>,
) {
  return request<Global.ResponseData>('/api/v1/subscription-tag', {
    method: 'POST',
    data,
  });
}
