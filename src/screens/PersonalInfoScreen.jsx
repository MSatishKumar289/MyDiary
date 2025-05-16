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


export default function PersonalInfoScreen(){

    const [selected, setSelected] = useState();
    const [openDOBModal, setOpenDOBModal] = useState(false);

    const handleDobSelect = () => {
        setOpenDOBModal(true);
    }
    const handleDobClose = () => {
        setOpenDOBModal(false);
    }

    return (
        <div className="text-center relative h-full grid grid-col-[3fr 1fr] items-center">
            <section className="flex flex-col gap-8 w-full">
                <FormInput label={"What is your name?"} inputPlaceHolder={'john@domain.com'} type={"text"}/>
                <div className="flex flex-col justify-center items-center">
                    <label className="text-lg">What is your gender?</label>
                    <div className="flex justify-around gap-5 w-full pt-2 pl-2 pr-2">
                        <div className="w-1/3 gap-1 border h-[100px] rounded flex flex-col justify-center items-center">
                            <img src={male_ic} width={25}/>
                            <div className="text-md">Male</div>
                        </div>
                        <div className="w-1/3 gap-1 border h-[100px] rounded flex flex-col justify-center items-center">
                            <img src={female_ic} width={25}/>
                            <div className="text-md">Female</div>
                        </div>
                        <div className="w-1/3 gap-1 border h-[100px] rounded flex flex-col justify-center items-center">
                            <img src={others_ic} width={25}/>
                            <div className="text-md">Others</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label className="text-lg">When is your birthday?</label>
                    <input onClick={handleDobSelect} placeholder="DOB" className="border h-[32px] rounded indent-2 mt-1 w-2/3"/>

                    {openDOBModal && <AppModal onClose={handleDobClose}>
                        <label className="text-lg">When is your birthday?</label>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            captionLayout="dropdown"
                            className="mt-6"
                            footer={
                                selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                            }
                        />
                         <AppButton
                            buttonClassName={`h-[32px] text-white w-full rounded mt-3 m-auto`}
                            bgColor={COLORS.appHardColor}>
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