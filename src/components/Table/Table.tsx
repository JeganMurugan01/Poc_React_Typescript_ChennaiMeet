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

  const popupParent = useMemo<HTMLElement | null>(() => {
    return document.querySelector("body");
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onGridReady = useCallback((params: any) => {
    console.log(params, "params");
  }, []);
  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={"ag-theme-quartz-dark"}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          domLayout={"autoHeight"}
          autoSizeStrategy={autoSizeStrategy}
          allowContextMenuWithControlKey={true}
          suppressContextMenu={false}
          enableRangeSelection={true}
          popupParent={popupParent}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default Table;
