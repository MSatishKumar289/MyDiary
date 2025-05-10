import React from 'react';
import { COLORS } from '../utils/color';
import AppInput from './AppInput';

export default function FormInput({label, inputPlaceHolder, type}){
    return (
        <div className="flex flex-col justify-center items-center">
            <label className="text-lg">{label}</label>
            <AppInput 
                placeholder={inputPlaceHolder}
                bgColor={COLORS.appLightColor} 
                type={type}
                inputClassName={`h-[40px] pv-4 w-3/4 indent-[15px] rounded text-[13px] text-[${COLORS.appTextColor}]`}/>
        </div>
    )
}