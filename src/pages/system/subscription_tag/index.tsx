import TableFormModal, {
  useTableFormModal,
} from '@/components/table_form_modal';
import services from '@/services/system/subscription_tag';
import {
  ActionType,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useRef } from 'react';
import { useSubscriptionTagActions } from './use_subscription_tag_actions';
import { useSubscriptionTagColumns } from './use_subscription_tag_columns';

const { querySubscriptionTagList } = services.SubscriptionTagController;

const SubscriptionTag: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const { tableFormModalState, onTableFormModalOpen, onTableFormModalCancel } =
    useTableFormModal();

  const { handleAdd } = useSubscriptionTagActions();
  const { columns } = useSubscriptionTagColumns();

  return (
    <PageContainer
      header={{
        title: 'wechaty实例',
      }}
    >
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
        columns={columns}
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

      <TableFormModal<SubscriptionTagBySystem.SubscriptionTag>
        columns={columns}
        modalVisible={tableFormModalState.visible}
        onCancel={onTableFormModalCancel}
        onSubmit={async (value) => {
          const success = await handleAdd(value);
          if (success) {
            onTableFormModalCancel();
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      />
    </PageContainer>
  );
};

export default SubscriptionTag;
