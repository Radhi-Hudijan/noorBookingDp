export const userColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
   {
    field: "city",
    headerName: "City",
    width: 100,
  },
   {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },

  {
    field: "type",
    headerName: "type",
    width: 100,
  },
   {
    field: "title",
    headerName: "Title",
    width: 250,
  },
   {
    field: "city",
    headerName: "City",
    width: 150,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 250,
  },

  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
   {
    field: "price",
    headerName: "Price",
    width: 100,
  },
   {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];