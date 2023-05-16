import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { setProduct } from '../state/actions';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/actions/cart';
import {
  setError,
  setSuccess,
  setLoading,
} from '../state/actions/loadingStates';

const PaymentPage = () => {
  
  return (
    <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
      Hello
    </div>
  );
};

export default PaymentPage;
