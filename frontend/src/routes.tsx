import FormRegisterpage from "./components/pages/FomRegisterPage";
import ConfirmationPage from "./components/pages/ValidationPage";
import FormLoginPage from "./components/pages/FormLoginPage";
import CategoryPage from "./components/pages/CategoryPage";
import AllProductPage from "./components/pages/Allproduct";
import ProductPage from "./components/pages/ProductPage";
import PaymentPage from "./components/pages/PaymentPage";
import CartPage from "./components/pages/CartPage";
import Homepage from "./components/pages/HomePage";
import { Route, Routes } from "react-router";

function Router() {
  return (
    <Routes>
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/register" element={<FormRegisterpage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/products" element={<AllProductPage />} />
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/login" element={<FormLoginPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/history" element={"bite"} />  */}
    </Routes>
  );
}

export default Router;
