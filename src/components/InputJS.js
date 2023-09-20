import { useState } from 'react'
import { add } from '../redux/slices/todoapp'
import { useDispatch } from 'react-redux';

function InputJS() {

  const [inputValue,setInputValue] = useState('as');
  const dispatch = useDispatch();

  const addNewOne = () => {
    dispatch(add(inputValue))
  }

  return (
    <div className='flex bg-slate-300 py-5 justify-center'>
        <input onChange={(veri) => setInputValue(veri.target.value)} className='outline-none text-lg p-2 bg-sky-600 rounded-md text-white placeholder-white mr-5' type='search' placeholder='Add New One' />
        <button onClick={addNewOne} className='text-3xl bg-green-400 px-[12px] rounded-md hover:scale-125 transition-all pb-[5px]'>
            +
        </button>
    </div>
  )
}

export default InputJS