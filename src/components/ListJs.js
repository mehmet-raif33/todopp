import React from 'react'
import { useSelector } from 'react-redux';
import ListElemani from './ListElemani';

function ListJs() {

    const store = useSelector((state) => state.todoappStore)

    return (
        <div className='pt-10 bg-green-400 pb-[15%]'>
            {
                store.map((data)=>(
                    <ListElemani key={data.id} metin={data.data} durum={data.do} id={data.id} />
                ))
            }
        </div>
    )
}

export default ListJs