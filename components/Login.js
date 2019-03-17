import { StyledLogin } from "../styles/StyledLogin"
import { StyledButton } from "../styles/StyledButton"

export default function LoginComponent() {
    return (
        <StyledLogin>
            <form>
                <h1>Prijavi se</h1>
                <label htmlFor="email">Emejl</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="password">Šifra</label>
                <input type="text" id="password" name="password" />
                <StyledButton>Prijavi se</StyledButton>
            </form>
        </StyledLogin>
    )
}
