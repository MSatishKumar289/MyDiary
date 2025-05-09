import React from "react";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";
import AppInput from "../components/AppInput";
import FormInput from "../components/FormInput";

export default function LoginScreen(){
    return (
        <div className="text-center relative h-full">
            <FormInput label={"Email"} inputPlaceHolder={'john@domain.com'} type={"text"}/>
            <FormInput label={"Password"} inputPlaceHolder={'*****'} type={"password"}/>
            <FormInput label={"Re-Enter Password"} inputPlaceHolder={'*****'} type={"password"}/>
        </div>
    )
}