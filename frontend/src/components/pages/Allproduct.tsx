import AllProduct from "../AllProduct/allProduct";
import { Filter } from "../Filters/Filters";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
function AllProductPage() {
  return (
    <>
      <Navbar />
      <Filter />
      <AllProduct />
      <Footer />
    </>
  );
}
export default AllProductPage;
