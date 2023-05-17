import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    setName,
    setUsername,
    setPassword,
    setConfirmPassword,
    setRegistrationSuccess,
  } from '../state/actions/register';

const RegistrationPage = () => {
  const [name1, setName1] = useState('');
  const [username1, setUsername1] = useState('');
  const [password1, setPassword1] = useState('');
  const [confirmPassword1, setConfirmPassword1] = useState('');
  
  
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName1(event.target.value);
    
  };

  const handleUsernameChange = (event) => {
    setUsername1(event.target.value);
    
  };

  const handlePasswordChange = (event) => {
    setPassword1(event.target.value);
    
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword1(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    // console.log('Name:', name);
    // console.log('Username:', username);
    // console.log('Password:', password);
    // console.log('Confirm Password:', confirmPassword);
    dispatch(setName(name1));
    dispatch(setUsername(username1));
    dispatch(setPassword(password1));
    dispatch(setConfirmPassword(confirmPassword1));
    dispatch(setRegistrationSuccess(true));
    // You can replace the console.log statements with your actual registration logic
  };

  const handleLogin = () => {
    // Handle login navigation logic here
    console.log('Login');
    // You can replace the console.log statement with your actual login navigation logic
  };
  const registration = useSelector((state) => state.registration);

  console.log(registration);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to='/'>
          <button
            onClick={handleLogin}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            log in to your account
          </button>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  //value={name}
                  onChange={handleNameChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  //value={username}
                  onChange={handleUsernameChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  //value={password}
                  onChange={handlePasswordChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  //value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;