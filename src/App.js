import './App.css';
import Products from './Components/Products';

function App() {
  const arr = [
    {
      id: Math.random(),
      name: 'HQD melo 1000 💨',
      desc: '✨Кокосовое молокоананас🥥',
      desc2: '⚡️Энергетик🏃🏼‍♀️',
      type: '🔹Черника🫐',
      type2: '🔺Арбуз🍉',
      type3: '🔻Малина🤭',
      price: '200💸',
      img: '/images/num1.jpg'
    },
    {
      id: Math.random(),
      name: 'ELF BAR 5000💨',
      desc: '🟠тройная дыня 🍈',
      desc2: '🔴арбузная резинка 🍉',
      type: '🟡клубничный банан 🍌',
      type2: '⚪️лимон мята 🍋',
      type3: '🟣красный мохито 🍹',
      price: '700💸',
      img: '/images/num1.jpg'
    },
    {
      id: Math.random(),
      name: 'Морс 🌬️',
      desc: '🔴 черника смородина 🫐',
      desc2: '🟠персик груша 🍐',
      type: '🟡малина земляника 🍓',
      type2: '🟢яблоко черника 🍎',
      type3: '🔵лесные ягоды 🏕️',
      price: '450💸',
      img: '/images/num1.jpg'
    },
    {
      id: Math.random(),
      name: 'Hot Spot 50mg',
      desc: '🔴лимон брусника 🍋',
      desc2: '🟠яблоко груша 🍐',
      type: '🟡ананас ежевика🍍',
      type2: '🟢черника дыня 🍈',
      type3: '🔵арбуз жвачка 🍉',
      price: '450💸',
      img: '/images/num1.jpg'
    }
  ]
  return (
    <div>
      <div>
         <div>
            <Products data={arr} />
         </div>
      </div>
    </div>
  );
}

export default App;
