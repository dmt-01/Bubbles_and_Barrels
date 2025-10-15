import CategoryPage from "./components/pages/CategoryPage";
import AllProductPage from "./components/pages/Allproduct";
import ProductPage from "./components/pages/ProductPage";
import LoginForm from "./components/forms/loginForms";
import Homepage from "./components/pages/HomePage";
import { Route, Routes } from "react-router";
import Form from "./components/forms/forms";

function Router() {

  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<LoginForm />} />
        {/*<Route path="/cart" element={"bite"} />
        <Route path="/payment" element={"bite"} />
        <Route path="/history" element={"bite"} />  */}
      </Routes>
  )
}

export default Router;
