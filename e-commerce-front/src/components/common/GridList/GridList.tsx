import { Col, Row } from "react-bootstrap";

type TGridListPropes<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  Empty: React.ReactNode;
};

type HasId = { id?: number };

const GridList = <T extends HasId>({
  records,
  renderItem,
  Empty,
}: TGridListPropes<T>) => {
  const categories =
    records.length > 0
      ? records.map((category) => {
          return (
            <Col
              key={category.id}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2 "
            >
              {renderItem(category)}
            </Col>
          );
        })
      : Empty;
  return <Row>{categories}</Row>;
};

export default GridList;
