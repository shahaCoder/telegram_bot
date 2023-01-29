import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { GiSmokeBomb } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { AuthContext } from "../Context/useContext";
import { v4 as uuidv4 } from 'uuid';

const tg = window.Telegram.WebApp
const InfoPage = () => {
  let splited = useLocation().state;
  const { arr } = useContext(AuthContext);
  const [delivery, setDelivery] = useState(false)
  const [mySelf, setMySelf] = useState(false)
//   const [adress, setAdress] = useState()
  const [cash, setCash] = useState(false)
  const [card, setCard] = useState(false)
  const submit = (e) => {
	e.preventDefault()

	let data = {
		id: uuidv4()
	}
	let fm = new FormData(e.target)
	fm.forEach((value, key) => {
		data[key] = value
	})
	console.log(data);
	if(delivery === false || mySelf === false){
		tg.MainButton.text = 'Купить'
		tg.MainButton.show()
	} else {
		tg.MainButton.hide()
	}
  };
  const handleChange = () => {
	setDelivery(!delivery)
}
  const info = arr?.filter((i) => i.id === +splited)[0];
//   useEffect(() => {
// 	tg.MainButton.text = 'Купить'
// 	tg.MainButton.show()
//   }, []);
  return (
    <form onSubmit={e => submit(e)}>
      <div className="flex justify-center pt-6">
        <div className="w-full max-w-sm p-4 h-[500px] bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Оформление заказа
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
          </div>
          <ul className="space-y-5 my-7">
            <li className="flex space-x-3 items-center">
              <GiSmokeBomb color="white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {info?.name}
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <FcMoneyTransfer />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {info?.desc}
              </span>
            </li>
            <li className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Типы доставки:
            </li>
            <div className="w-full flex gap-5">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="delivery" value={delivery} onChange={handleChange} />
                <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Доставка
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="mySelf" value={mySelf} onChange={() => setMySelf(!mySelf)} />
                <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Самовывоз
                </p>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Введите адрес доставки
              </label>
              <input
                name="adress"
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              />
            </div>
            <li className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Типы оплаты:
            </li>
            <div className="w-full flex gap-5">
              <div className="flex items-center gap-2">
                <input
				 type="checkbox"
				 value={cash} 
				 onChange={() => setCash(!cash)}
				name="cash" />
                <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Наличкой
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input 
				type="checkbox"
				name="card" 
				value={card}
				onChange={() => setCard(!card)}
				/>
                <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Картой(онлайн)
                </p>
              </div>
            </div>
		  <button type="submit">Send</button>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default InfoPage;