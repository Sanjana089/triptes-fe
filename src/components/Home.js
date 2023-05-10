import Header from "../Header";
import "./Home.css";

const Home = () => {
  console.log("Here");
  return (
    <div className="Home">
      <Header></Header>
      <br />
      <h1>Trending</h1>
      <h3>Coming Soon</h3>
    </div>
  );
};

export default Home;
