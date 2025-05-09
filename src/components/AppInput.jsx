import React from "react";

export default function AppInput({placeholder, value, inputClassName, bgColor, type}){
    return (
        <input type={type} placeholder={placeholder} value={value} className={inputClassName} style={{backgroundColor: bgColor}}/>
    )
}