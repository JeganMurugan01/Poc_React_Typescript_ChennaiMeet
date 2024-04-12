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
    if (item["action"] === "delete") {
      delete rowDataItem["action"];
    }
    return rowDataItem;
  });

  const transformedColDefs = columnKeys.map((key) => ({
    headerName: key,
    field: key,
  }));

  return { rowData: transformedRowData, colDefs: transformedColDefs };
};
