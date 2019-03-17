import { StyledRegister } from "../styles/StyledRegister"
import { StyledButton } from "../styles/StyledButton"

export default function RegisterComponent() {
    return (
        <StyledRegister>
            <form>
                <h1>Registruj se</h1>
                <label htmlFor="name">Ime</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Emejl</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="password">Šifra</label>
                <input type="text" id="password" name="password" />
                <label htmlFor="password2">Ponovite šifru</label>
                <input type="text" id="password2" name="password2" />
                <StyledButton>Prijavi se</StyledButton>
            </form>
        </StyledRegister>
    )
}
