import './App.scss'
import Footer from './components/Footer/footer';
import Form from './components/forms/forms';
import Navbar from "./components/Navbar/navbar";
import Homepage from './components/pages/HomePage';

function App() {


  return (
    <>
    <Navbar/>
    <Homepage/>
   {/* <Form/> */}
    <Footer/>
    </>
  )
}

export default App;
