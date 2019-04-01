import React, { useState } from "react"
import axios from "axios"
import Link from 'next/link'

import { StyledLogin } from "../styles/StyledLogin"
import { StyledButton } from "../styles/StyledButton"
import InputAndLabel from "./InputAndLabel";

export default function LoginComponent() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})


    async function submitHandler(e) {
        e.preventDefault()

        try {
            const {data} = await axios.post("http://localhost:3000/api/user/login", {
                email,
                password
            })
    
            console.log(data)
        } catch(e) {
            setErrors(e.response.data)
            console.log(e.response.data)
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
                <StyledButton>Login</StyledButton>
            </form>
        </StyledLogin>
    )
}
