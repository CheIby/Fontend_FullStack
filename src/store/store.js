import {configureStore} from '@reduxjs/toolkit'
import {useDispatch,useSelector} from 'react-redux'

import authReducer from './slices/authSlice'

const store = configureStore({
    reducer:{
        auth:authReducer
    }
})

export const useStoreSelector=useSelector
export const useStoreDispatch =() =>useDispatch()
export default store