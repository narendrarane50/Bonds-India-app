import React from 'react';
import FilterProds from './components/FilterProds';
import Products from './components/Products';
import { useSelector } from 'react-redux';

function Home() {
  const loginDetails = useSelector((state) => state.login);
  const registrationDetails = useSelector((state) => state.registration.registrationDetails);

  const { username } = loginDetails;
  const matchedUser = registrationDetails.find((detail) => detail.username === username);

  const userName =  matchedUser.name;
  

  return (
    <div>
      <div className='mx-10 font-bold text-lg'><h1>Welcome, {userName}</h1></div>
      <FilterProds />
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>
    </div>
  );
}

export default Home;