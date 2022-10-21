import {useMutation} from 'react-query'
import axios from 'axios'
import { setUser } from '../store/slices/authSlice'
import { useStoreDispatch } from '../store/store'

export function useSingin(){
    const dispatch =useStoreDispatch()
    return useMutation('signin',({username,password})=> axios.post('http://localhost:7000/auth/login',{username,password}),
    {
        onSuccess:(data)=>{
            dispatch(setUser(data))
        }
    }
    )
}

