import { AiOutlineSetting } from "react-icons/ai";
import {  BsJournalBookmark} from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export const gridOrderStatus = (props:any) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const gridOrderImage = (props:any) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);
export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const ordersData = [
  {
    OrderID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    OrderItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    OrderItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    OrderID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    OrderItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    OrderID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    OrderItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const userProfileData = [
  {
    icon: <FaRegUser />,
    title: 'Нүүр хуудас',
    link:'/userPanel',
    desc: 'Хэрэглэгчийн хуудас',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsJournalBookmark />,
    title: 'Миний захиалга',
    link:'/userPanel/orders',
    desc: 'Захиалсан байр сууцууд',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <AiOutlineSetting />,
    title: 'Тохиргоо',
    link:'/userPanel/settings',
    desc: 'Мэдээллээ шинэчлэх',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];