import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="notFound">
      <LottieHandler
        styled={"mb-0"}
        type="notFound"
        message=""
        cssStyle={{ width: "500px", marginTop: "-10%" }}
      />
      <Link to="/" replace={true}>
        How about going back to safety
      </Link>
    </Container>
  );
};

export default Error;
