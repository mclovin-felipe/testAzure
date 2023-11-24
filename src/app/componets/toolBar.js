import {
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarDensitySelector,
    GridToolbarQuickFilter,
  } from "@mui/x-data-grid";
  import React from "react";
  export default function toolbar() {
    return (
      <GridToolbarContainer
        sx={{
          height: "7vh",
          display: "flex",
          justifyContent: "space-around",
          borderBottom:"1px solid #e0e0e0"
        }}
      >
        
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
        <GridToolbarDensitySelector />
        <GridToolbarQuickFilter
          sx={{
            borderRadius: 1,
            backgroundColor: "white",
            svg: { color: "black" },
  
            width: "30vh",
            input: { color: "black", fontWeight: "bold" },
            ".css-v4u5dn-MuiInputBase-root-MuiInput-root:after": {
              borderBottom: "black 1px solid ",
            },
            padding: 0.5,
          }}
        />
      </GridToolbarContainer>
    );
  }