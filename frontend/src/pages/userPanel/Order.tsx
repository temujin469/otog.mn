import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Нэр',
    dataIndex: 'name',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Өрөө',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Төлөв',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => {
      let color;
      if (status === 'Амжилттай') {
        color = 'green';
      } else if (status === 'Цуцлагдсан') {
        color = "red"
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      )
    }
  },
  {
    title: 'Үйлдэл',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <span className='bg-red-400 rounded-lg px-2 py-1 text-white'>Устгах</span>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    age: 1,
    name: 'Тэрэлж',
    status: 'Амжилттай',
  },
  {
    key: '2',
    age: 4,
    name: 'Шаргалжуут',
    status: 'Хүлээгдэж байгаа',
  },
  {
    key: '3',
    age: 2,
    name: 'Урьхан',
    status: 'Цуцлагдсан',
  },
];

const rowSelection = {
  // onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
  //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  // },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Order: React.FC = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  return (
    <div className=''>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns} dataSource={data}
        className=""
      />
    </div>
  )
}

export default Order;