import React, { useState, useEffect } from "react"
import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { userColumns, userRows } from "../../dataTableSource"
import { Link, useLocation } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import axios from "axios"

const Datatable = ({ columns }) => {
  // get the page type from the location users / hotels ..etc
  const location = useLocation()
  const path = location.pathname.split("/")[1]

  // data list
  const [list, setList] = useState([])

  // Fetch all users from the server
  const { data, loading, error } = useFetch(`/api/${path}`)

  //update the list whit the data fetched
  useEffect(() => {
    setList(data)
  }, [data])

  const handleDelete = async (id) => {
    // delete the row from the dataBase
    try {
      await axios.delete(`/api/${path}/${id}`)

      const newList = list.filter((row) => {
        return row._id !== id
      })

      // update the list state with the filtered users
      setList(newList)
    } catch (error) {}
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
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => {
                handleDelete(params.row._id)
              }}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        {path}
        <Link
          to={`/${path}/new`}
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 9 },
        //   },

        // }}
        pageSize={9}
        // pageSizeOptions={[5, 10]}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  )
}

export default Datatable
