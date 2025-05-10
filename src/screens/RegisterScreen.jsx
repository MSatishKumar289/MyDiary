import React from "react";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";
import AppInput from "../components/AppInput";
import FormInput from "../components/FormInput";

export default function RegisterScreen(){
    return (
        <div className="text-center relative h-full">
            <section className="absolute left-0 right-0 top-[20vh] flex flex-col gap-8 w-full">
                <FormInput label={"Email"} inputPlaceHolder={'john@domain.com'} type={"text"}/>
                <FormInput label={"Password"} inputPlaceHolder={'*****'} type={"password"}/>
                <FormInput label={"Re-Enter Password"} inputPlaceHolder={'*****'} type={"password"}/>
            </section>
            <section className="absolute left-0 right-0 top-[calc(100%_-_70px)]">
                <AppButton
                    buttonClassName={`h-[50px] text-white w-3/4 rounded font-bold`}
                    bgColor={COLORS.appHardColor}>Register</AppButton>
            </section>
        </div>
    )
}