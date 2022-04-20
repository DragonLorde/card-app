import React, { useEffect } from "react";
import StyledContainer from "./StyledContainer";

const Container = ({title, img, text, author, link}) => {

   
    //можно сделать декомпозицию
    return (
        <StyledContainer>
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="board">
                <img src={img} alt="" />
            </div>
            <div className="text">
                <p>
                    {text}
                </p>
            </div>
            <div className="about">
                <p><span>Автор:</span> {author} </p>
                <a href={link}> Узнать больше </a>
            </div>
        </StyledContainer>
    )
}

export default Container;