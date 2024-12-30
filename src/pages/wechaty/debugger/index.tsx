import { PageContainer } from '@ant-design/pro-components';

const Debugger: React.FC = () => {
  return (
    <PageContainer ghost>

      <ProTable<SubscriptionTagBySystem.SubscriptionTag>
        headerTitle="wechaty列表"
        rowKey="id"
        actionRef={actionRef}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button key="1" type="primary" onClick={() => onTableFormModalOpen()}>
            新建
          </Button>,
        ]}
        request={async (params, sorter, filter) => {
          const { data, result } = await querySubscriptionTagList({
            ...params,
            // FIXME: remove @ts-ignore
            // @ts-ignore
            sorter,
            filter,
          });
          return {
            data: data?.list || [],
            success: result,
          };
        }}
        columns={[]}
        // rowSelection={{
        //   onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        // }}
      />
    </PageContainer>
  );
};

export default Debugger;
