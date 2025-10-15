import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Router from "./routes";
import "./main.scss"



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
