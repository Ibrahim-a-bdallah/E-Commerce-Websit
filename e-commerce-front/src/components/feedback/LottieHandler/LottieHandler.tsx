import Lottie from "lottie-react";
import loading from "@assets/LottieFiles/Loading.json";
import error from "@assets/LottieFiles/Error.json";
import networkError from "@assets/LottieFiles/NetworkErorr.json";
import empty from "@assets/LottieFiles/Empty.json";
import notFound from "@assets/LottieFiles/NotFound.json";
import fill from "@assets/LottieFiles/Fill.json";

const lottieType = {
  loading,
  error,
  networkError,
  empty,
  notFound,
  fill,
};

type TProps = {
  message?: string;
  type: keyof typeof lottieType;
  styled?: string;
  cssStyle?: React.CSSProperties;
};

const LottieHandler = ({ message, type, styled, cssStyle }: TProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <Lottie
        className={`${styled}`}
        animationData={lottieType[type]}
        style={cssStyle ?? { width: "300px" }}
      />
      <p>{message}</p>;
    </div>
  );
};
export default LottieHandler;
