import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Container from './components/layouts/Container';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
import User from './components/User';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Container />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />} />
          <Route path='user' element={<User />} />
          <Route path='user/productdetail' element={<ProductDetail />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;