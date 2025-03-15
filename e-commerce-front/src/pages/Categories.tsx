import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce/index";
import Loading from "@components/feedback/loading/Loading";
import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/heading";
import { useCategories } from "@hooks/useCategories";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const Categories = () => {
  const { records, loading, error } = useCategories();
  return (
    <Container>
      <Heading title="Categories" />
      <Loading loading={loading} error={error} type="category">
        <GridList
          records={records}
          renderItem={(category) => <Category {...category} />}
          Empty={
            <LottieHandler type="empty" message="Your categories are empty" />
          }
        />
      </Loading>
    </Container>
  );
};

export default Categories;
