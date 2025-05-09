import React from 'react';

export default function AppButton({children, buttonClassName, bgColor}){
    return (
        <button className={buttonClassName} style={{backgroundColor: bgColor}}>
            {children}
        </button>
    )
}