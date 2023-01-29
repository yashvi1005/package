import {
    Button,
    Typography,
    Popover,
    Drawer,
    Divider,
    TextField,
    FormControlLabel,
    Checkbox,
  } from "@mui/material";
  import popover from './Popover'
  import React, { useState } from "react";
  import style from "./list.module.css";
  import {
    Switches,
    CustomActionCell,
    CustomPackagePrice,
    CustomDefaultPackageCell,
  } from "./CustomCell";
  import Box from "@mui/material/Box";
  import { DataGrid } from "@mui/x-data-grid";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


  const columns = [
    {
      field: "packagename",
      headerName: "PACKAGE NAME",
      width: 150,
    },
    {
      field: "description",
      headerName: "DESCRIPTION",
      width: 150,
      headerClassName: "lastcolumnSeparator",
    },
    {
      field: "packagetype",
      headerName: "PACKAGE TYPE",
      width: 150,
    },
    {
      field: "trialdays",
      headerName: "TRIAL DAYS",
      width: 140,
    },
    {
      field: "defaultpackage",
      headerName: "DEFAULT PACKAGE",
      renderCell: () => <CustomDefaultPackageCell />,
      width: 130,
    },
    {
      field: "packageprice",
      headerName: "PACKAGE PRICE",
      renderCell: () => <CustomPackagePrice />,
      width: 170,
    },
    {
      field: "enable/disable",
      headerName: "ENABLE/DISABLE",
      renderCell: () => <Switches />,
      width: 150,
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 160,
      renderCell: () => <CustomActionCell />,
    },
  ];

  const List = (props) => {
    const  {popoverHandleClick} = props
    console.log(74, popoverHandleClick)
    const [open1, setOpen1] = useState(false);

  function handleOpen1() {
    console.log("opennnn");
    // setAnchorEl(false);
    setOpen1(true);
  }
  return (
    <>
    <div className={style["main"]}>
        <span style={{ float: "left" }}>
          <Typography variant="h5">Package List</Typography>
        </span>
        <span style={{ float: "right" }}>
          <Button
            style={{
              color: "#866afb",
              width: "120px",
              height: "50px",
              borderRadius: "5px",
              borderColor: "#866afb",
            }}
            onClick={props.popoverHandleClick}
            variant="outlined"
            disableElevation
            disableRipple
          >
            Actions
            <ExpandMoreIcon />
          </Button>
            <popover>
          <Typography sx={{ p: 2 }}>
              <div style={{ listStyle: "none", fontSize: "18px" }}>
                <Button disableRipple  onClick={handleOpen1} style={{ marginTop: "10px", color:"black", fontSize:"15px" }}>
                  Add Package
                </Button>
                <br></br>
                <Button disableRipple  onClick={handleOpen1} style={{ marginTop: "10px", color:"black", fontSize:"15px" }}>
                  Export to PDF
                </Button>
                <br></br>
                <Button disableRipple  onClick={handleOpen1} style={{ marginTop: "10px", color:"black", fontSize:"15px" }}>
                  Export to Excel
                </Button>
                {/* <li style={{ marginTop: "10px",fontSize:"14px" }}>Export to PDF</li>
                <li style={{ marginTop: "10px" }}>Export to Excel</li> */}
              </div>
            </Typography>
            </popover>
          </span>
          </div>
          </>
  )
}

export default List