import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp
function App() {

  useEffect(() => {
      tg.ready()
  }, []);
  const handleClose = () => {
    tg.close()
  }
  return (
    <div>
         work
         <button onClick={handleClose}>Close</button>
         <span>
             {tg.initDataUnsafe?.user?.username}
         </span>
    </div>
  );
}

export default App;
