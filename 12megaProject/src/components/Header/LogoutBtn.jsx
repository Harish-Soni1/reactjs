import React from 'react'
import {useDispatch} from 'react-redux'
import {logOut} from "../../store/authSlice"
import authService from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => { 
            dispatch(logOut())
            navigate("/") 
        })
    }

    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler} >Logout</button>
    )
}

export default LogoutBtn