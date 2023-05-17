import Loader from "./Loader";
import { useSelector } from "react-redux";

const PaymentPage = ({count}) => {
  const loadingState = useSelector((state) => state.loadingState);

  const product = useSelector((state) => state.product);

  const { title, image } = product;

  if (loadingState.loading) {
    return (
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Loader />
      </div>
    );
  }

  if (loadingState.error) {
    return (
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <div>Sorry, We're facing an error</div>{" "}
      </div>
    );
  }

  return (
    <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">Your order is placed</div>
        <div className="p-8 h-96 bg-white my-8">
          <img className="h-full" src={image} alt={title} />
        </div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <h1 className="text-3xl font-bold">{count}</h1>
      </div>
    </div>
  );
};

export default PaymentPage;
