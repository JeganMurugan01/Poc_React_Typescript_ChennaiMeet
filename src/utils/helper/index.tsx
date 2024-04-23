import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";

interface RowDataItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface ColumnDefinition {
  field: string;
}

interface TransformedData {
  rowData: RowDataItem[];
  colDefs: ColumnDefinition[];
}

export const transformData = (data: RowDataItem[]): TransformedData => {
  if (!Array.isArray(data) || data.length === 0) {
    return { rowData: [], colDefs: [] };
  }

  const columnKeys = Object.keys(data[0]);
  const transformedColDefs =   data.map((item)=>columnKeys.map((key) => {    
    return {
      headerName: key,
      field: key,
      hide:key==="id",
      ...(key === "action"
        ? {
            cellRenderer: () => <FaTrash style={{ cursor: "pointer" }} />,
          }
        : key === "edit" ? {
            cellRenderer: () => <FaEdit size={18} style={{ cursor: "pointer" }} />,
          }:key === "createdAt" && {
            cellRenderer: () => getFormatDate(item.createdAt),
          }),
    };
  }))

  return { rowData: data, colDefs: transformedColDefs[0] };
};


export const getFormatDate=(timestamp:Date)=> {
  const date = moment(timestamp);
  const now = moment();

  if (date.isSame(now, 'day')) {
    return date.format('LT'); // Time format
  } else if (date.isSame(now.clone().subtract(1, 'day'), 'day')) {
    return 'Yesterday';
  } else if (date.isSame(now, 'month')) {
    return `${now.diff(date, 'days')} days ago`;
  } else if (date.isSame(now, 'year')) {
    return `${now.diff(date, 'months')} months ago`;
  } else {
    return date.format('MM-DD-YYYY'); // Default format
  }
}