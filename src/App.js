import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={<Dashboard user={user} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
