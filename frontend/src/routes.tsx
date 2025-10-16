import FormRegisterpage from "./components/pages/FomRegisterPage";
import FormLoginPage from "./components/pages/FormLoginPage";
import CategoryPage from "./components/pages/CategoryPage";
import AllProductPage from "./components/pages/Allproduct";
import ProductPage from "./components/pages/ProductPage";
import Homepage from "./components/pages/HomePage";
import { Route, Routes } from "react-router";


function Router() {

  return (
    <Routes>
        <Route path="/register" element={<FormRegisterpage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/login" element={<FormLoginPage />} />
        <Route path="/" element={<Homepage />} />
        {/*<Route path="/cart" element={"bite"} />
        <Route path="/payment" element={"bite"} />
        <Route path="/history" element={"bite"} />  */}
      </Routes>
  )
}

export default Router;
