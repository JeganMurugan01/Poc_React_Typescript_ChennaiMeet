import moment from "moment";
import { Resolver } from "react-hook-form";
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

  const transformedColDefs = Object.keys(data[0]).map((key) => ({
    headerName: key,
    field: key,
    hide: key === "id"||key==="UserType",
    ...(key === "Action"
      ? {
          cellRenderer: () => <FaTrash style={{ cursor: "pointer" }} />,
        }
      : key === "edit"
      ? {
          cellRenderer: () => <FaEdit size={18} style={{ cursor: "pointer" }} />,
        }
      : key === "createdAt"
      ? {
          cellRenderer: (params: { value: Date; }) => getFormatDate(params.value),
        }
      : {}),
  }));

  return { rowData: data, colDefs: transformedColDefs };
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
export const resolver: Resolver = async (values) => {
  const errors: { [key: string]: { type: string; message: string } } = {};
  Object.entries(values).forEach(([key, value]) => {
    if (!value) {
      errors[key] = {
        type: "required",
        message: `${key} is required`,
      };
    }
  });
  return {
    values: values,
    errors: errors,
  };
};