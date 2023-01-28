import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GiSmokeBomb } from 'react-icons/gi'
import { FcMoneyTransfer } from 'react-icons/fc'
import { useForm } from "react-hook-form";

const InfoPage = () => {
    const [data, setData] = useState()
    const { pathname } = useLocation()
    const splited = pathname.split(':').at(-1)
    useEffect(() => {
        fetch('http://localhost:3001/Products/' + splited)
          .then(res => res.json())
          .then(res => setData(res))
    }, [splited]);
    const { register, handleSubmit, } = useForm();
  const submit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className='flex justify-center'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Оформление заказа</h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">{data?.name}</span>
    </div>
    <ul  className="space-y-5 my-7">
        <li className="flex space-x-3 items-center">
            <GiSmokeBomb color='white' />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{data?.desc}</span>
        </li>
        <li className="flex space-x-3 items-center">
            <FcMoneyTransfer />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{data?.price}</span>
        </li>
        <li className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>Типы доставки:</li>
        <div className='flex items-center gap-2'>
            <input type="checkbox" {...register("delivery")}  />
            <p className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>Доставка</p>
        </div>
        <div className='flex items-center gap-2'>
            <input type="checkbox" {...register("myself")} />
            <p className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>Самовывоз</p>
        </div>
            <div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Введите адрес доставки</label>
    <input {...register("adress")} type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" />
</div>
    </ul>
    <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
</div>
        </div>
        </form>
    );
}

export default InfoPage;