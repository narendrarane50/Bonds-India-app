import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { setProduct } from "../state/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setError,
  setSuccess,
  setLoading,
} from "../state/actions/loadingStates";

const PaymentPage = () => {
  const productID = useParams().productID;
  const loadingState = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);
  const { id, title, price, image } = product;
  const state = useSelector((state) => state);
  const [rate1,setRate1] = useState(product.price);
  const [count,setCount] = useState(1);
  console.log(price)
  console.log(rate1)
  

  useEffect(() => {
    console.log(state);
    dispatch(setLoading(true));
    loadProducts();
  }, []);

  const loadProducts = async () => {
    dispatch(setProduct(await fetchProduct()));
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productID}`
      );
      let data = await response.json();
      dispatch(setLoading(false));
      dispatch(setSuccess(true));
      return data;
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };

  const handleincrement = () =>{
    setCount(count+1)
    setRate1(rate1+price)
    
  }

  const handledecrement = () =>{
    if(count>1){
      setCount(count-1)
      setRate1(rate1-price)
      
    }
  }

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
      <div className="flex justify-evenly items-start">
        <div className="p-8 h-96 bg-white">
          <img className="h-full" src={image} alt={title} />
        </div>

        <div className="max-w-md">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="h-1 w-4/12 mt-2 bg-black"></div>

          <div className="flex items-center mt-4">
            <button onClick={handledecrement} className="mr-5 text-2xl bg-gray-300 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
              -
            </button>
            <span className="mr-5 text-2xl">{count}</span>
            <button onClick={handleincrement} className="text-2xl bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              +
            </button>
          </div>

          <h2 className="text-2xl font-bold mt-4">
            {price && `$${rate1.toFixed(2)}`}
          </h2>

          <button
            className="flex items-center mt-5 justify-center p-2 font-bold w-full bg-black text-white hover:bg-slate-800"
            onClick={() => navigate(`/orderplaced/${id}`)}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
