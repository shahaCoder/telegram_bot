// import { useEffect, useState } from 'react';
import { useContext } from 'react';
import './App.css';
import Products from './Components/Products';
import { AuthContext } from './Context/useContext';

function App() {
  const { arr } = useContext(AuthContext);
  return (
    <div>
            <Products data={arr} />
    </div>
  );
}

export default App;
