import React from 'react'
import Form from "./Form.js"
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/slices/userSlice.js'
import { Link } from 'react-router-dom'

export default function UserForm() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data)
        dispatch(setUser(data))
    }
    return (
        <>
            {user.username}
            <Link to="/">home</Link>

            <Form onSubmit={onSubmit} />
        </>
    )
}
