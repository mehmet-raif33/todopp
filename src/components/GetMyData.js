import { useDispatch , useSelector } from 'react-redux';
import { reduxThunk } from '../redux/slices/getMyData';

function GetMyData() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.getMyDataForApi)

    const getMyDataFunction = () => {
        dispatch(reduxThunk())
    }

    return (
        <div className='bg-pink-300 flex justify-center py-10'>
           
            <botton onClick={getMyDataFunction} className='bg-yellow-300 p-3 rounded-md transition-all hover:scale-110'>
                Get My Data
                { user.loading && 'Is Loading!!'}
                { user.data && `<div>
                                    <h3>    
                                        ${user.data.title}
                                    </h3>
                                    <span>
                                        ${user.data.completed}
                                    </span>
                                </div>`}
            </botton>
        </div>
  )
}

export default GetMyData