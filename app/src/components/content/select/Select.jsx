import React from "react";
import Button from "../../UI/button/Button";

const Select = ({children, buttonData}) => {

    

    return (
        //убрать инлайн стили
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        }}>
            {
                buttonData.map((item, index) =>
                    <Button
                        key={item.type}
                        onClick={item.onClick}
                        value={item.type}
                    > {item.text} </Button>
                )
            }
        </div>
    )
}

export default Select;