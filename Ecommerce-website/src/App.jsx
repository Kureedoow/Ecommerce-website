import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Loginform from "./pages/Loginform";
import Signupform from "./pages/Signupform";
import Myaccount from "./pages/Myaccount";
import Cards from "./pages/Cards";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/about" element={<Contact />}></Route>
      <Route path="/login" element={<Loginform />}></Route>
      <Route path="/signup" element={<Signupform />}></Route>
      <Route path="/account" element={<Myaccount />}></Route>
      <Route path="/cards" element={<Cards />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/error" element={<ErrorPage />}></Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
