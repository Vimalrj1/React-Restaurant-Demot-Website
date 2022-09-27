import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Heimg/Header'
import Body from './Components/Body/Body'
import { Routes, Route } from "react-router-dom";
import Resside from './Components/Restaurant  Page/Restpagebody'
import Order from './Components/Order/Order'
import About from './Components/about/about'
import Sign from './Components/Sign in/Sign'
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={[<Header/>,<Body/>]} />
        <Route path="Restaurant" element={<Resside/>} />
        <Route path="Orderonline" element={<Order/>} />
        <Route path="About" element={<About/>} />
        <Route path="Sign" element={<Sign/>} />
      </Routes>
      
    </div>
  );
}

export default App;
