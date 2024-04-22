import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo } from "react";
import {
  ColDef,
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from "ag-grid-community";
import "ag-grid-charts-enterprise";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = ({ rowData, colDefs, onCellClicked,onGridReady }: any) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
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
      filter: true,
    };
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 
  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz-dark"}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          domLayout={"autoHeight"}
          autoSizeStrategy={autoSizeStrategy}
          allowContextMenuWithControlKey={true}
          defaultColDef={defaultColDef}
          onCellClicked={onCellClicked}
          pagination={true}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default Table;
