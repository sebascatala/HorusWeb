// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/Auth/LogIn";
import SignUp from "./Pages/Auth/SignUp";
import ShopList from "./Pages/Shop/ShopList";
import ProductDetail from "./Pages/Shop/ProductDetail";
import AllTours from "./Pages/Tours/AllTours";
import CreateYourTrip from "./Pages/Tours/CreateYourTrip";
import TourDetail from "./Pages/Tours/TourDetail";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<ShopList />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/tours" element={<AllTours />} />
        <Route path="/tours/create" element={<CreateYourTrip />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
