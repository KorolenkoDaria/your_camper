
import { ButtonEl } from "./Button.styled";

const Button = ({ children, onClick }) => {
    return (
        <ButtonEl onClick={onClick}> {children} </ButtonEl>
    )
}

export default Button;