import React, { useState } from "react"
import { StyledRegister } from "../styles/StyledRegister"
import { StyledButton } from "../styles/StyledButton"
import Link from 'next/link'

import axios from "axios"

export default function RegisterComponent() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    async function submitHandler(e) {
        e.preventDefault()

        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/user/register",
                { name, surname, email, address, password, password2 }
            )

            console.log(data)
        } catch (e) {
            console.log(e.response.data)
        }
    }

    return (
        <StyledRegister>

            <form onSubmit={submitHandler}>
                <h1>Register</h1>
                <hr/>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="surname">Surname</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    onChange={e => setSurname(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="password2">Reapeat Password</label>
                <input
                    type="password"
                    id="password2"
                    name="password2"
                    onChange={e => setPassword2(e.target.value)}
                />
                <StyledButton>Register</StyledButton>
            </form>
        </StyledRegister>
    )
}
