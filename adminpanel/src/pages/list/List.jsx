import "./list.scss";
import SideBar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Datatable from "../../component/datatable/Datatable";

const List = ({columns}) => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={ columns } />
      </div>
    </div>
  );
};

export default List;
