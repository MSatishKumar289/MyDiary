import React from 'react';
import { COLORS } from '../utils/color';
import AppInput from './AppInput';

export default function FormInput({label, errorMessage, inputPlaceHolder, type, value, setInputField}){
    
    function handleInputChange(event) {
        setInputField(event.target.value);
    }

    console.log(errorMessage);

    return (
        <div className="flex flex-col justify-center items-center">
            <label className="text-lg">{label}</label>
            <AppInput 
                placeholder={inputPlaceHolder}
                bgColor={COLORS.appLightColor} 
                type={type}
                value={value}
                onChangeHandler={handleInputChange}
                inputClassName={`h-[40px] pv-4 w-3/4 indent-[15px] rounded text-[13px] text-[${COLORS.appTextColor}]`}/>
            {errorMessage != "" && <p className='text-red-600 text-sm w-3/4'>{errorMessage}</p>}
        </div>
    )
}