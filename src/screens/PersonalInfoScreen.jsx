import React, { useState } from "react";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";
import FormInput from "../components/FormInput";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

import female_ic from "../assets/female_ic.png";
import male_ic from "../assets/male_ic.png";
import others_ic from "../assets/others_ic.png";
import AppModal from "../components/AppModal";
import { calculateDate } from "../utils/calculateDate";


export default function PersonalInfoScreen(){

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [openDOBModal, setOpenDOBModal] = useState(false);
    const [gender, setGender] = useState("");

    const handleDobModalOpen = () => {
        setOpenDOBModal(true);
    }
    const handleDobModalClose = () => {
        setOpenDOBModal(false);
    }

    return (
        <div className="text-center relative h-full grid grid-col-[3fr 1fr] items-center">
            <section className="flex flex-col gap-8 w-full">
                <FormInput label={"What is your name?"} inputPlaceHolder={'john@domain.com'} type={"text"}/>
                <div className="flex flex-col justify-center items-center">
                    <label className="text-lg">What is your gender?</label>
                    <div className="flex justify-around gap-5 w-full pt-2 pl-2 pr-2">
                        <div onClick={() => setGender("male")} 
                            className={`w-1/3 gap-1 border h-[100px] rounded flex flex-col justify-center items-center ${gender === "" && "opacity-[1]"} ${gender === "male" ? "opacity-[1]" : "opacity-[0.1]"}`}>
                            <img src={male_ic} width={25}/>
                            <div className="text-md">Male</div>
                        </div>
                        <div onClick={() => setGender("female")} 
                            className={`w-1/3 gap-1 border h-[100px] rounded flex flex-col justify-center items-center ${gender === "" && "opacity-[1]"} ${gender === "female" ? "opacity-[1]" : "opacity-[0.1]"}`}>
                            <img src={female_ic} width={25}/>
                            <div className="text-md">Female</div>
                        </div>
                        <div onClick={() => setGender("others")} 
                            className={`w-1/3 gap-1 border h-[100px] rounded flex flex-col justify-center items-center ${gender === "" && "opacity-[1]"} ${gender === "others" ? "opacity-[1]" : "opacity-[0.1]"}`}>
                            <img src={others_ic} width={25}/>
                            <div className="text-md">Others</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label className="text-lg">When is your birthday?</label>
                    <p onClick={handleDobModalOpen} placeholder="DOB" className="border h-[32px] rounded indent-2 mt-1 w-2/3 grid items-center">
                        {calculateDate(selectedDate)}
                    </p>

                    {openDOBModal && <AppModal onClose={handleDobModalClose}>
                        <label className="text-lg">When is your birthday?</label>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            captionLayout="dropdown"
                            className="mt-6"
                            footer={
                                selectedDate ? `Selected: ${selectedDate.toLocaleDateString()}` : "Pick a day."
                            }
                            startMonth={new Date(1960, 6)}
                            endMonth={new Date(2025, 9)}
                        />
                         <AppButton
                            buttonClassName={`h-[32px] text-white w-full rounded mt-3 m-auto`}
                            bgColor={COLORS.appHardColor}
                            onClick={handleDobModalClose}>
                            Done
                        </AppButton>
                    </AppModal>}
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