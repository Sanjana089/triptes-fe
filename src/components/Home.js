import Header from "./Header";
import "./Home.css";
import Tours from "../data/Tours.json"
import TourCard from "./TourCard";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="Home">
      <Header></Header>
      {/* <br /> */}
      <Carousel/>
      <br/>
      <h1>Ongoing</h1>
      {Tours.map((tour, i) => (
        <TourCard
          key={i}
          id={i}
          title={tour.title}
          subtitle={tour.subtitle}
          price={tour.price}
          rating={tour.rating}
          image={tour.image}
        />
      ))}
      <br />
    </div>
  );
};

export default Home;
