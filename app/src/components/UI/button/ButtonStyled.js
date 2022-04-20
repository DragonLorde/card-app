import styled from 'styled-components';
//плохой нейминг

const ButtonStyled = styled.button`
    background: #FFFFFF;
    box-shadow: 5px 9px 7px -3px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    //margin: 10px;
    padding: 20px;
    width: 200px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    transition: 0.4s ease-in-out;
    &:hover {
        background: #AEE9A5;
    }

`;

export default ButtonStyled;