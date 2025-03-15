import { TLoading } from "@type";
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/cartSkeleton/CartSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";

const skeltons = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};
type TStatus = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
  type: keyof typeof skeltons;
};

const Loading = ({ loading, error, children, type = "category" }: TStatus) => {
  const Component = skeltons[type];
  if (loading === "pending") {
    return <Component />;
  }
  if (loading === "rejected") {
    return error === "Network Error" ? (
      <LottieHandler
        styled={"mb-0"}
        type="networkError"
        cssStyle={{ width: "500px", marginTop: "-10%" }}
      />
    ) : (
      <LottieHandler
        styled={"mb-0"}
        type="error"
        message={error as string}
        cssStyle={{ width: "500px", marginTop: "-10%" }}
      />
    );
  }
  return <>{children}</>;
};

export default Loading;
