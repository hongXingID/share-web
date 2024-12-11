import services from '@/services/system/subscription_tag';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import React from 'react';

const { querySubscriptionTagList } = services.SubscriptionTagController;

const SubscriptionTag: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: 'wechaty实例',
      }}
    >
      <ProTable<SubscriptionTagBySystem.SubscriptionTag>
        headerTitle="wechaty列表"
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            key="1"
            type="primary"
            onClick={() => handleModalVisible(true)}
          >
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
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {/* {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              项&nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )} */}
    </PageContainer>
  );
};

export default SubscriptionTag;
