
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Clothes from './Components/Fashion/Clothes';
import Gadget from './Components/Gadget/Gadget';
import Jewelry from './Components/Jewelry/Jewelry';
import Footer from './Components/Footer/Footer';






function App() {
  

  return (
    <>
      <div>
       <Navbar/>
      <Header/>
       <Clothes/>
       <Gadget/>
       <Jewelry/>
       <Footer/>


        </div>
    </>
  )
}

export default App
