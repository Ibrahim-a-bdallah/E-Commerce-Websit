import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
  const renderSkeletons = Array(5)
    .fill(0)
    .map((_, i) => {
      return (
        <Col
          key={i}
          className="d-flex justify-content-center mb-5 mt-2"
          xs={6}
          sm={6}
          md={3}
        >
          <ContentLoader
            speed={2}
            width={200}
            height={200}
            viewBox="0 0 200 200"
            backgroundColor="#f0f0f0"
            foregroundColor="#ffffff"
          >
            <rect x="61" y="179" rx="3" ry="3" width="85" height="6" />
            <circle cx="104" cy="84" r="84" />
          </ContentLoader>
        </Col>
      );
    });

  return <Row>{renderSkeletons}</Row>;
};

export default CategorySkeleton;
