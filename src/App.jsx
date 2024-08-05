import React, { useEffect, useState } from "react";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import Users from "./Components/Users";
import Posts from "./Components/Posts";
import OneUser from "./Components/OneUser";
import HOC from "./Components/HOC";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./Pages/Edit";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Burger", count: 1 },
    { id: 2, name: "Fries", count: 2 },
    { id: 3, name: "Soda", count: 3 },
  ]);

  const handleDelete = (id) => {
    const newArr = [...products].filter((element) => element.id !== id);
    setProducts(newArr);
  };

  const handleReset = (arg) => {
    const newArr = products.map((product) => {
      product.count = 0;
      return product;
    });
    setProducts(newArr);
  };

  const handleAdd = (id, num) => {
    const newArr = products.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + num };
      } else {
        return product;
      }
    });
    setProducts(newArr);
  };
  const itemsCount = products.reduce(
    (accumulatedValue, product) => accumulatedValue + product.count,
    0
  );
  const Layout = () => {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        {/* Same as */}
        <Navbar itemCount={itemsCount} />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={Layout}>
        <Route
          path="/"
          element={
            <Cart
              products={products}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              handleReset={handleReset}
            />
          }
        />
        <Route path="about" Component={About} />
        <Route path="login" Component={Login} />
        <Route path="edit/:id" Component={Edit} />
        <Route path="register" Component={Registration} />
        <Route path="contactus" Component={ContactUs} />
        <Route path="dashboard" Component={Dashboard}>
          <Route path="users" Component={Users}>
            <Route
              path=":id"
              element={
                <HOC>
                  <OneUser />
                </HOC>
              }
            />
          </Route>
          <Route path="posts" Component={Posts} />
        </Route>
        <Route path="*" Component={NotFound} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
