import { Route, Routes } from "react-router";
import Homepage from "./components/pages/HomePage";
import CategoryPage from "./components/pages/CategoryPage";
import AllProductPage from "./components/pages/Allproduct";
import ProductPage from "./components/pages/ProductPage";
import Form from "./components/forms/forms";

function Router() {

  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/register" element={<Form />} />
        {/*<Route path="/login" element={"bite"} />
        <Route path="/cart" element={"bite"} />
        <Route path="/payment" element={"bite"} />
        <Route path="/history" element={"bite"} />  */}
      </Routes>
  )
}

export default Router;
