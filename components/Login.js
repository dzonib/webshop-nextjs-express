import React, { useState } from "react"
import axios from "axios"
import Link from 'next/link'

import { StyledLogin } from "../styles/StyledLogin"
import { StyledButton } from "../styles/StyledButton"

export default function LoginComponent() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function changeHandler(e) {
        switch (e.target.name) {
            case "email":
                return setEmail(e.target.value)
            case "password":
                return setPassword(e.target.value)
            default:
                return ""
        }
    }

    async function submitHandler(e) {
        e.preventDefault()

        const {data} = await axios.post("http://localhost:3000/api/user/login", {
            email,
            password
        })

        console.log(data)
    }

    return (
        <StyledLogin>
            <Link href="/register">
                <a>Register</a>
            </Link>
            <form onSubmit={submitHandler}>
                <h1>Prijavi se</h1>
                <label htmlFor="email">Emejl</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={changeHandler}
                />
                <label htmlFor="password">Šifra</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    onChange={changeHandler}
                />
                <StyledButton>Prijavi se</StyledButton>
            </form>
        </StyledLogin>
    )
}
