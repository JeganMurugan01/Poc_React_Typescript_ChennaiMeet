import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo } from "react";
import "./Table.css";
import {
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from "ag-grid-community";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = ({ rowData, colDefs }: any) => {
  const autoSizeStrategy = useMemo<
    | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy
  >(() => {
    return {
      type: "fitGridWidth",
    };
  }, []);

  return (
    <div className="ag-theme-quartz table-container">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout={"autoHeight"}
        autoSizeStrategy={autoSizeStrategy}
      />
    </div>
  );
};

export default Table;
