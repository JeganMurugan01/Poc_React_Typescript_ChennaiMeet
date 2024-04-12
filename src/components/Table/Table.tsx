import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useCallback, useMemo } from "react";
import {
  ColDef,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from "ag-grid-community";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = ({ rowData, colDefs }: any) => {
  console.log(rowData, colDefs, "rowData, colDefs");
  const autoSizeStrategy = useMemo<
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy
  >(() => {
    return {
      type: "fitGridWidth",
    };
  }, []);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
      filter: true,
    };
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onGridReady = useCallback((params: any) => {
    console.log(params, "params");
  }, []);
  return (
    <div className="ag-theme-quartz table-container">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout={"autoHeight"}
        autoSizeStrategy={autoSizeStrategy}
        onGridReady={onGridReady}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Table;
