import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import ManageUser from "./components/ManageUser";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./UserContext";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "./components/Card1";

import { CartProvider } from "./components/ContextRducer";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card4 from "./components/Card4";
import Card3 from "./components/Card3";
import ShopDetails from "./components/ShopDetails";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <CartProvider>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            
            <Route path="manageuser" element={<ManageUser />} />
            <Route path="shop/:index" element={<ShopDetails />} />
            <Route path="card1" element={<Card1 />} />
            <Route path="card2" element={<Card2 />} />
            <Route path="card3" element={<Card3 />} />
            <Route path="card4" element={<Card4 />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
