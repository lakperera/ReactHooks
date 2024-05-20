import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Context from './Cart_context/Context';
import Header from './components/Header';
import Cart from './Cart_context/Cart';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Home />
              </>
            } />
             <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Context>
  );
}

export default App;
