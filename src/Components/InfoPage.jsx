import React, { useCallback, useContext, useEffect, useState } from "react";
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
  const [name, setName] = useState('')
  const [price, setPrice] = useState(Number)
  const [adress, setAdress] = useState('')
  const [adressValue, setAdressValue] = useState('')
  const [cash, setCash] = useState(false)
  const [card, setCard] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isDisabled2, setIsDisabled2] = useState(false)
  const [isDisabled3, setIsDisabled3] = useState(false)
  const [isDisabled4, setIsDisabled4] = useState(false)
  const [orderType, setOrderType] = useState('')
  const [orderType2, setOrderType2] = useState('')
  const [error, setError] = useState('')
  const [error2, setError2] = useState('')
  const submit = (e) => {
	e.preventDefault()

	let data = {
		id: uuidv4()
	}
	setName(info?.name)
	let fm = new FormData(e.target)
	fm.forEach((value, key) => {
		data[key] = value
	})
  console.log(orderType);
	if(delivery === true || mySelf === true){
		setError('')
		if(cash === true || card === true){
			tg.MainButton.text = 'Купить'
			setError2('')	
		    tg.MainButton.show()
		} else {
			tg.MainButton.hide()
			setError2('Обязательно выберите тип оплаты!')	
		}
	} else {
		tg.MainButton.hide()
		setError('Обязательно выберите тип доставки!')
	}
  if(delivery === true){
    if(adressValue.length <= 0){
      setAdress('Введите адресс,чтобы продолжить!')
      tg.MainButton.hide()
    } else {
      setAdress('')
    }
  } else {
    setAdress('Не указано(самовывоз)')
  }
  setPrice(info?.price)
  };
  const handleChange = () => {
	setDelivery(!delivery)
}
  const adressHandler = (e) => {
    setAdressValue(e.target.value)
  }
  const info = arr?.filter((i) => i.id === +splited)[0];
  const onSendData = useCallback(() => {
       const data = {
          delivery,
          name,
          orderType,
          orderType2,
          adressValue,
          price
	   }
	   tg.sendData(JSON.stringify(data))
  }, [delivery,name,orderType, orderType2,adressValue, price])
  useEffect(() => {
	tg.onEvent('mainButtonClicked', onSendData)
	return () => {
		tg.offEvent('mainButtonClicked', onSendData)
	}
  }, [onSendData]);
  useEffect(() => {
    if(delivery === true){
      setOrderType('Доставка')
      setIsDisabled(true)
    } else {
      setOrderType('Самовывоз')
      setIsDisabled(false)
    }
    if(mySelf === true){
      setIsDisabled2(true)
    } else {
      setIsDisabled2(false)
    }
  }, [delivery, mySelf]);
  useEffect(() => {
    if(cash === true){
      setOrderType2('Наличными')
      setIsDisabled4(true)
    } else {
      setOrderType2('Картой')
      setIsDisabled4(false)
    }
    if(card === true){
      setIsDisabled3(true)
    } else {
      setIsDisabled3(false)
    }
  }, [cash, card]);
  return (
    <form onSubmit={e => submit(e)}>
      <div className="flex justify-center pt-6">
        <div className="w-full max-w-sm p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                <input type="checkbox" name="delivery" disabled={isDisabled2} value={delivery} onChange={handleChange} />
                <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Доставка
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="mySelf" disabled={isDisabled} value={mySelf} onChange={() => setMySelf(!mySelf)} />
                <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Самовывоз
                </p>
              </div>
            </div>
			<p className="text-red-500">
			{error}
			</p>
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
                value={adressValue}
                onChange={(e) => adressHandler(e)}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              />
              <p className="text-red-500">
              {adress}
              </p>
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
         disabled={isDisabled3}
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
        disabled={isDisabled4}
				/>
                <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Картой(онлайн)
                </p>
              </div>
            </div>
			<p className="text-red-500">
			{error2}
			</p>
		  <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Сохранить</button>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default InfoPage;