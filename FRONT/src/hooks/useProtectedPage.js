import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const useProtectedPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')
        const test = typeof(token)==="string"?true:false
        // let token;
        // try{
        //     token =JSON.parse( localStorage.getItem('token'))
        // }catch{
        //     token = undefined
        // }
        
        if(!test) {
            navigate('/login-teacher')
        }
    },[navigate])
}