import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/heading";
import { Product } from "@components/eCommerce";
import Loading from "@components/feedback/loading/Loading";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
import { useWishlist } from "@hooks/useWishlist";
import { Container } from "react-bootstrap";

const Wishlist = () => {
  const { records, loading, error } = useWishlist();
  return (
    <Container>
      <Heading title="Your Wishlist" />
      <Loading loading={loading} error={error} type="product">
        <GridList
          records={records}
          renderItem={(product) => <Product {...product} />}
          Empty={
            <LottieHandler type="empty" message="Your wishlist is empty" />
          }
        />
      </Loading>
    </Container>
  );
};

export default Wishlist;
