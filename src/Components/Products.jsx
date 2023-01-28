import React, { useEffect } from 'react';
import Item from './child/Item';

const tg = window.Telegram.WebApp
const Products = ({data}) => {
    useEffect(() => {
        tg.ready()
    }, []);
    return (
        <div className='w-[90%] m-auto'>
        <h1 className='mb-6 mt-2'>Привет, <span>
             {tg.initDataUnsafe?.user?.username}
         </span></h1>
        <div className='w-full  flex flex-wrap gap-2'>
            {
                data?.map(i => <Item key={i.id} item={i} />)
            }
        </div>
        </div>
    );
}

export default Products;
