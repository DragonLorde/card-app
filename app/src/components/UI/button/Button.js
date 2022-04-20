import React from "react";
import ButtonStyled from "./ButtonStyled";

const Button = ({children , ...props}) => {
    return (
        <ButtonStyled
            {...props}
        >
            {children}
        </ButtonStyled>
    )
}

export default Button;