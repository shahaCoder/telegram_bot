import { useEffect, useState } from 'react';
import './App.css';
import Products from './Components/Products';

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('http://localhost:3001/Products/')
      .then(res => res.json())
      .then(res => setData(res))
  }, []);
  return (
    <div>
            <Products data={data} />
    </div>
  );
}

export default App;
