import Sidebar from "../../component/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
};

export default Home;
