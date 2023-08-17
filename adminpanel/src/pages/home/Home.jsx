import FeaturedChart from "../../component/featuredChart/FeaturedChart";
import NormalChart from "../../component/normalChart/NormalChart";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import { Widget } from "../../component/widget/Widget";
import "./home.scss";
import Table from "../../component/table/List";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <FeaturedChart />
          <NormalChart />
        </div>

        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
