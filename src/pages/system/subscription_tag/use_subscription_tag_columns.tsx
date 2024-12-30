import { ProColumns } from '@ant-design/pro-components';
import { Divider } from 'antd';

export function useSubscriptionTagColumns() {
  const columns: ProColumns<SubscriptionTagBySystem.SubscriptionTag>[] = [
    {
      title: '标签名称',
      dataIndex: 'tag_name',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '名称为必填项',
          },
        ],
      },
    },
    {
      title: '所属节点',
      dataIndex: 'parent_tag_id',
      valueType: 'cascader'
    },
    {
      title: '备注',
      dataIndex: 'remark',
      valueType: 'text',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            配置
          </a>
          <Divider type="vertical" />
          <a href="">订阅警报</a>
        </>
      ),
    },
  ];

  return {
    columns,
  };
}
