import { Button } from "react-bootstrap";
import image from "@assets/home/Summer outfits men.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center gap-3 ">
      <div className="content col-md-6">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments.
          designed to bring out your individuality and cater to your sense of
        </p>
        <Link to="categories">
          <Button className="btn">Shop Now</Button>
        </Link>
      </div>
      <div className="img d-flex justify-content-center col-md-6">
        <img
          className="rounded-lg"
          src={image}
          max-height="618"
          max-width="345"
        ></img>
      </div>
    </div>
  );
};

export default Home;
