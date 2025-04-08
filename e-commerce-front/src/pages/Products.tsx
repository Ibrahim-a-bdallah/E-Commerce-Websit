import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/heading";
import Product from "@components/eCommerce/Product/Product";
import Loading from "@components/feedback/loading/Loading";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { useProducts } from "@hooks/useProducts";
import { memo } from "react";
import { Container } from "react-bootstrap";

const Products = memo(() => {
  const { productFullInfo, loading, error, param } = useProducts();
  return (
    <Container className="mt-4">
      <Heading title={`${param.prefix} Products`} />
      <Loading loading={loading} error={error} type="product">
        <GridList
          records={productFullInfo}
          renderItem={(product) => <Product {...product} />}
          Empty={
            <LottieHandler type="empty" message="Your category is empty" />
          }
        />
      </Loading>
    </Container>
  );
});

export default Products;
