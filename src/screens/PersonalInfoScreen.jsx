import React from "react";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";
import AppInput from "../components/AppInput";
import FormInput from "../components/FormInput";

export default function PersonalInfoScreen(){
    return (
        <div className="text-center relative h-full grid grid-col-[3fr 1fr] items-center">
            <section className="flex flex-col gap-8 w-full">
                <FormInput label={"What is your name?"} inputPlaceHolder={'john@domain.com'} type={"text"}/>
                <FormInput label={"Password"} inputPlaceHolder={'*****'} type={"password"}/>
                <FormInput label={"Re-Enter Password"} inputPlaceHolder={'*****'} type={"password"}/>
            </section>
            <section className="flex flex-col justify-end ">
                <AppButton
                    buttonClassName={`h-[50px] text-white w-3/4 rounded font-bold m-auto`}
                    bgColor={COLORS.appHardColor}>
                    Next
                </AppButton>
            </section>
        </div>
    )
}