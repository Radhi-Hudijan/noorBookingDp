import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource";
import { Link } from "react-router-dom";

const Datatable = () => {

  const [data, setData] = useState(userRows)

  const handleDelete = (id) => { 
    const newData = data.filter((row) => {
         return row.id !== id      
    })

    setData(newData);
  }
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,

      // to get the id of row from userRows
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to='/users/test' style={{ 'textDecoration': 'none' }}>
             <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => {
              handleDelete(params.row.id)
             }}>Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
     
      <div className="dataTableTitle">
        Add New User
          <Link to='/users/new' style={{ 'textDecoration': 'none' }} className="link">
            Add New
          </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }} 
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
