import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import CategoryPage from "./components/pages/CategoryPage";
import AllProductPage from "./components/pages/Allproduct";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<AllProductPage />} />
        {/* <Route path="/products/:id" element={"bite"} />
        <Route path="/login" element={"bite"} />
        <Route path="/register" element={"bite"} />
        <Route path="/cart" element={"bite"} />
        <Route path="/payment" element={"bite"} />
        <Route path="/history" element={"bite"} />  */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
