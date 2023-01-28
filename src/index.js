import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import InfoPage from './Components/InfoPage';
import { AuthContext } from './Context/useContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
const arr = [
  {
    id: 1,
    name: 'HQD melo 1000 💨',
    desc: '✨ Кокосовое молокоананас 🥥',
    desc2: '⚡️ Энергетик 🏃🏼‍♀️',
    type: '🔹 Черника 🫐',
    type2: '🔺 Арбуз 🍉',
    type3: '🔻 Малина 🤭',
    price: '200₽',
    img: '/images/num1.jpg'
  },
  {
    id: 2,
    name: 'ELF BAR 5000💨',
    desc: '🟠тройная дыня 🍈',
    desc2: '🔴арбузная резинка 🍉',
    type: '🟡клубничный банан 🍌',
    type2: '⚪️лимон мята 🍋',
    type3: '🟣красный мохито 🍹',
    price: '700₽',
    img: '/images/num2.jpg'
  },
  {
    id: 3,
    name: 'Морс 🌬️',
    desc: '🔴 черника смородина 🫐',
    desc2: '🟠персик груша 🍐',
    type: '🟡малина земляника 🍓',
    type2: '🟢яблоко черника 🍎',
    type3: '🔵лесные ягоды 🏕️',
    price: '450₽',
    img: '/images/num3.jpg'
  },
  {
    id: 4,
    name: 'Hot Spot 50mg',
    desc: '🔴лимон брусника 🍋',
    desc2: '🟠яблоко груша 🍐',
    type: '🟡ананас ежевика🍍',
    type2: '🟢черника дыня 🍈',
    type3: '🔵арбуз жвачка 🍉',
    price: '450₽',
    img: '/images/num4.jpg'
  }
]
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <AuthContext.Provider value={{
         arr
        }}>
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='/info/:id' element={<InfoPage />} />
       </Routes>
    </AuthContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);