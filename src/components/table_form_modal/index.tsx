import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useState } from 'react';

interface TableFormModalProps<T> {
  title?: string;
  width?: number;
  modalVisible?: boolean;
  onCancel?: () => void;
  onSubmit?: (params: T) => void;
  columns?: ProColumns<T>[];
  cancelText?: string;
  okText?: string;
}

export type TableFormModalState<T> = {
  visible: boolean;
  type: 'add' | 'edit';
  data?: T;
};

export default function TableFormModal<T extends Record<string, any>>(
  props: TableFormModalProps<T>,
) {
  const {
    title = '新建',
    width = 420,
    modalVisible,
    columns,
    onSubmit,
    onCancel,
    cancelText = '取消',
    okText = '确定',
  } = props;

  return (
    <Modal
      destroyOnClose
      title={title}
      width={width}
      open={modalVisible}
      onCancel={onCancel}
      cancelText={cancelText}
      okText={okText}
      footer={null}
    >
      <ProTable<T>
        onSubmit={onSubmit}
        rowKey="id"
        type="form"
        columns={columns}
        form={{
          submitter: {
            submitButtonProps: {
              children: '确定',
            },
            resetButtonProps: {
              children: '取消',
            },
          },
        }}
      />
    </Modal>
  );
}

export function useTableFormModal<T>() {
  const initState: TableFormModalState<T> = {
    visible: false,
    type: 'add',
    data: undefined,
  };
  const [tableFormModalState, setTableFormModalState] =
    useState<TableFormModalState<T>>(initState);

  const onTableFormModalOpen = (
    params: Omit<TableFormModalState<T>, 'visible'>,
  ) => {
    const { type, data } = params || {};
    setTableFormModalState({
      visible: true,
      type,
      data,
    });
  };

  const onTableFormModalCancel = () => {
    setTableFormModalState({
      visible: false,
      type: 'add',
    });
  };

  return {
    tableFormModalState,
    onTableFormModalCancel,
    onTableFormModalOpen,
  };
}
