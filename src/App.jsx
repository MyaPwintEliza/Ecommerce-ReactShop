import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Wishlist from "./pages/Wishlist";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Sidebar />
    </Router>
  );
};

export default App;
