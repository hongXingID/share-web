import { ParamsType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';

interface TableFormModalProps<T> {
  title?: string;
  width?: number;
  modalVisible?: boolean;
  onCancel?: () => void;
  onSubmit?: (params: ParamsType) => void;
  columns: ProColumns<Record<string, any>, 'text'>[];
}

export default function TableFormModal<T, U>(props: TableFormModalProps<T>) {
  const {
    title = '新建',
    width = 420,
    modalVisible,
    columns,
    onSubmit,
    onCancel,
  } = props;

  return (
    <Modal
      destroyOnClose
      title={title}
      width={width}
      open={modalVisible}
      onCancel={onCancel}
      footer={null}
    >
      <ProTable onSubmit={onSubmit} rowKey="id" type="form" columns={columns} />
    </Modal>
  );
}
