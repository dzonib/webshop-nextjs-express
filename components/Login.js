import React, { useState } from "react"
import axios from "axios"
import Router from 'next/router'

import { StyledLogin } from "../styles/StyledLogin"
import { StyledButton } from "../styles/StyledButton"
import InputAndLabel from "./InputAndLabel"

export default function LoginComponent() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})


    async function submitHandler(e) {
        e.preventDefault()
 
        try {
            setLoading(true)
            const {data} = await axios.post("http://localhost:3000/api/user/login", {
                email,
                password
            })

           Router.push('/profile')
        } catch(e) {
            setLoading(false)
            setErrors(e.response.data)
        }
    }

    return (
        <StyledLogin>
            <form onSubmit={submitHandler}>
                <h1>Login</h1>
                <hr/>
                <InputAndLabel 
                    type="text"
                    name="email"
                    setValue={setEmail}
                    errors={errors.email}
                />
                <InputAndLabel 
                    type="text"
                    name="password"
                    setValue={setPassword}
                    errors={errors.password}
                />
                <StyledButton disabled={loading} loading={loading}>
                    Login
                </StyledButton>
            </form>
        </StyledLogin>
    )
}
