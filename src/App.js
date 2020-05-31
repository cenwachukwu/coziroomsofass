import React, { useEffect, useState, useReducer } from 'react';
import { Router, Link } from '@reach/router';
import './App.scss';
import Navbar from './components/navbar/navbar';
import CategoryNav from './components/categoryNav/categoryNav';
import Container from './components/mobileNav/container/container';
import Footer from './components/footer/footer';
import Home from './components/pages/homePage';
import Categories from './components/pages/categories/categories';

// redux
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './reduxStore';
import { listProducts } from './actions/productActions';

function App() {
  const productList = useSelector((state) => state.productList);
  console.log(productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  //   console.log(userInfo);

  useEffect(() => {
    // the action we want useEffect to do is make an api call to get our product data
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  return (
    <div>
      <Navbar />
      <CategoryNav />
      <Container />
      <Router>
        <Home path="/" exact component={Home} />
        <Categories
          path="/:category"
          component={Categories}
          ProductData={products.data}
          loading={loading}
          error={error}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
