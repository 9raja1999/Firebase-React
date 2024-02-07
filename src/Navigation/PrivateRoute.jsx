import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    const navigate = useNavigate()
    const [isUser, setIsUser] = useState(false)

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        if(!user) { 
            navigate('/auth')
        }else{
            setIsUser(true)
        }
    }, [])


    if(!isUser) return null


    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoute