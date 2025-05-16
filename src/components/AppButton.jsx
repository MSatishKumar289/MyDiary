import React from 'react';

export default function AppButton({children, buttonClassName, bgColor, onClick}){
    return (
        <button className={buttonClassName} style={{backgroundColor: bgColor, cursor: 'pointer'}} onClick={onClick}>
            {children}
        </button>
    )
}