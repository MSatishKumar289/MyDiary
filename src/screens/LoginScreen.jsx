import React, { useState } from "react";

import AppButton from "../components/AppButton";
import FormInput from "../components/FormInput";
import { COLORS } from "../utils/color";

import { loginUser, registerUser } from "../services/apiAuth";

const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginScreen(){

    const [email, setEmail] = useState("john@domain.com");
    const [password, setPassword] = useState("123456788");
    const [error, setError] = useState({
        email_e: "",
        password_e: ""
    });


    const handleLogin = async () => {
        // console.log(email, password);

        if(!emailRegex.test(email)){
            setError(prev => ({password_e: "" , email_e: "Please check your email Id"}))
        }
        else if(!true){ //passwordCheck.test(password)
            setError(prev => ({email_e: "", password_e: "Password must be at least 8 characters long and include a letter, a number, and a special character"}));
        }
        else{
            setError(prev => ({email_e: "", password_e: ""}));
            const userCreds =  await loginUser(email, password);
            console.log(userCreds.user.email);
        }
    }

    return (
        <div className="text-center relative h-full">
            <section className="absolute left-0 right-0 top-[20vh] flex flex-col gap-8 w-full">
                <FormInput
                    label={"Email"}
                    inputPlaceHolder={'john@domain.com'}
                    type={"text"} 
                    value={email}
                    errorMessage={error.email_e}
                    setInputField={setEmail}/>
                <FormInput
                    label={"Password"}
                    inputPlaceHolder={'*****'}
                    type={"password"}
                    value={password}
                    errorMessage={error.password_e}
                    setInputField={setPassword}/>
            </section>
            <section className="absolute left-0 right-0 top-[calc(100%_-_70px)]">
                <AppButton
                    buttonClassName={`h-[50px] text-white w-3/4 rounded font-bold`}
                    bgColor={COLORS.appHardColor}
                    onClick={handleLogin}>Login</AppButton>
            </section>
        </div>
    )
}