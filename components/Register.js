import React, { useState } from "react"
import { StyledRegister } from "../styles/StyledRegister"
import { StyledButton } from "../styles/StyledButton"
import Link from 'next/link'

import axios from "axios"
import InputAndLabel from "./InputAndLabel"

export default function RegisterComponent() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [errors, setErrors] = useState({})

    async function submitHandler(e) {
        e.preventDefault()

        try {
            const { data } = await axios.post(
                "http://localhost:3000/api/user/register",
                { name, surname, email, address, password, password2 }
            )

            console.log(data)
        } catch (e) {
            setErrors(e.response.data)
        }
    }

    return (
        <StyledRegister>

            <form onSubmit={submitHandler}>
                <h1>Register</h1>
                <hr/>
                {/* <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={e => setName(e.target.value)}
                /> */}
                <InputAndLabel 
                    type="text"
                    name="name"
                    setValue={setName}
                    errors={errors.name}
                />
                <InputAndLabel 
                    type="text"
                    name="surname"
                    setValue={setSurname}
                    errors={errors.surname}
                />
                <InputAndLabel 
                    type="email"
                    name="email"
                    setValue={setEmail}
                    errors={errors.email}
                />
                <InputAndLabel 
                    type="text"
                    name="address"
                    setValue={setAddress}
                    errors={errors.address}
                />
                <InputAndLabel 
                    type="password"
                    name="password"
                    setValue={setPassword}
                    errors={errors.password}
                />
                <InputAndLabel 
                    type="password"
                    name="password2"
                    setValue={setPassword2}
                    errors={errors.password2}
                />
                <StyledButton>Register</StyledButton>
            </form>
        </StyledRegister>
    )
}
