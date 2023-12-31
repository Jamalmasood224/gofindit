
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/home';
import Listing from './pages/Listing';
import Applayout from './layout/applayout';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
function App() {
  return (
    <BrowserRouter>
    <Applayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      </Applayout>
    </BrowserRouter>
  );
}

export default App;
