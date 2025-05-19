import React from "react";

export default function AppInput({placeholder, value, inputClassName, bgColor, type, onChangeHandler}){
    return (
        <input
            type={type} 
            placeholder={placeholder}
            value={value}
            className={inputClassName}
            style={{backgroundColor: bgColor}}
            onChange={onChangeHandler}/>
    )
}