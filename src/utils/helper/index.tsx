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
  const transformedRowData = data.map((item) => {
    const rowDataItem: RowDataItem = {};
    columnKeys.forEach((key) => {
      rowDataItem[key] = item[key];
    });
    return rowDataItem;
  });

  const transformedColDefs = columnKeys.map((key) => {
    return {
      headerName: key,
      field: key,
      ...(key === "action"
        ? {
            cellRenderer: () => <FaTrash style={{ cursor: "pointer" }} />,
          }
        : key === "edit" && {
            cellRenderer: () => <FaEdit size={18} style={{ cursor: "pointer" }} />,
          }),
    };
  });

  return { rowData: transformedRowData, colDefs: transformedColDefs };
};
