import React from 'react';
import Home from './components/Home';
import Context from './Cart_context/Context';
// import ReactReducer from './react_hook/ReactReducer';




function App() {
  return (
    <Context>
      <Home/>
      {/* <ReactReducer/> */}
    </Context> 
  );
}
export default App;