import { request } from '@umijs/max';

export async function createWechaty(params: Wechaty.WechatyCreateorRequest) {
  return request<Global.ResponseData<Wechaty.WechatyCreateorResponse>>(
    '/api/v1/wechaty/create',
    {
      method: 'POST',
      params: {
        ...params,
      },
    },
  );
}
