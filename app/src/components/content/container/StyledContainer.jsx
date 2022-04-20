import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: space-between;
    background: white;
    width: 100%;
    //height: 100%;
    border-radius: 12px;
    margin-top: 20px;
    .title {
        margin-top: 20px;
        display: flex;
        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: #000000;
       }
    }
    .board {
        margin-top: 20px;
        display: flex;
        width: 76%;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .text {
        display: flex;
        margin: 10px;
        justify-content: center;
        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: #000000;
        }
    }
    .about {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 20px;
        align-items: center;
        p {
            margin-left: 20px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            color: #000000;
            span {
                font-weight: 200;
            }
        }

    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        padding: 20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 13px;
        background: #5351DC;
        border-radius: 12px;
        color: #FFFFFF;
    }
`;

export default StyledContainer;