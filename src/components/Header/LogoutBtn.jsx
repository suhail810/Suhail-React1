import React from "react";
import { useDispatch} from "react-redux"
import authSlice, { logout } from "../../store/authSlice";

const dispatch = useDispatch()

const logoutHandler = (() => {
        authSlice.logout()
        .then(() => {
            dispatch(logout())
        })
})

function LogoutBtn() {
    return(
     <button onClick={logoutHandler}  className=" className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'">
        Logout</button>
    )
}

export default LogoutBtn