import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Slides from './components/home/Slide';
import Footer from './components/footer/footer';
import SignUp from './components/signup_signin/SignUp';
import Sign_in from './components/signup_signin/Sign_in';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbaar />
    <Newnav />
    <Routes>
      <Route path='/' element={<Maincomp />}  />
      <Route path='/login' element={<Sign_in />}  />
      <Route path='/register' element={<SignUp />}  />
    </Routes>
    
    <Footer/>
    
    </>
  );
}

export default App;