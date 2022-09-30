import React from 'react'
import {motion} from 'framer-motion';
import { useDispatch } from 'react-redux';
import { reload, close } from '../redux/slices/todoapp';

function ListElemani({metin,durum,id}) {

    const dispatch = useDispatch();

    const clickTheButton = () => {
        dispatch(reload(id))
    }
    const clickTheButton2 = () => {
        dispatch(close(id))
    }

    return (
        <motion.div 
        className={ durum ? 'flex py-3 mb-3 rounded-md justify-between mx-[100px] bg-sky-900 transition-all' : 'flex py-3 mb-3 rounded-md justify-between mx-[100px] bg-sky-500 transition-all'}
        initial={{
            scale: 0.9,
        }}
        transition={{
            delay: 0,
        }}
        animate={{
            scale: 1,
        }}
        >
            <h2 className={durum ? 'ml-5 line-through' : 'ml-5'}>{metin}</h2>
            {durum ? <button className='mr-5' onClick={clickTheButton}>
                <img src='https://img.icons8.com/ios/23/000000/refresh--v1.png' alt='sada' />
            </button> : 
            <button className='mr-5' onClick={clickTheButton2}>
                <img src='https://img.icons8.com/material-rounded/24/000000/delete-forever.png' alt='sada' />
            </button>}
        </motion.div>
    )
}

export default ListElemani