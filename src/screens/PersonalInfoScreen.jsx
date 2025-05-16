import React, { useState } from "react";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";
import FormInput from "../components/FormInput";
import female_ic from "../assets/female_ic.png";
import male_ic from "../assets/male_ic.png";
import others_ic from "../assets/others_ic.png";
import GenderCard from "../components/GenderCard";
import DateOfBirthInput from "../components/DateOfBirthInput";
import UserImage from "../components/UserImage";


export default function PersonalInfoScreen(){

    const [gender, setGender] = useState("");

    return (
        <div className="text-center relative h-full grid grid-col-[3fr 1fr] items-center">
            <section className="flex flex-col gap-8 w-full">

                <UserImage/>

                <FormInput label={"What is your name?"} inputPlaceHolder={'john@domain.com'} type={"text"}/>
                <div className="flex flex-col justify-center items-center">
                    <label className="text-lg">What is your gender?</label>
                    <div className="flex justify-around gap-5 w-full pt-2 pl-2 pr-2">
                        <GenderCard gender={gender} onClick={() => setGender("Male")} iconName={male_ic} iconLabel={"Male"} />
                        <GenderCard gender={gender} onClick={() => setGender("Female")} iconName={female_ic} iconLabel={"Female"} />
                        <GenderCard gender={gender} onClick={() => setGender("Others")} iconName={others_ic} iconLabel={"Others"} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <DateOfBirthInput/>
                </div>
            </section>
            <section className="flex flex-col justify-end ">
                <AppButton
                    buttonClassName={`h-[40px] text-white w-3/4 rounded font-semibold m-auto`}
                    bgColor={COLORS.appHardColor}>
                    Next
                </AppButton>
            </section>
        </div>
    )
}