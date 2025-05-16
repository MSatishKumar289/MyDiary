import React, { useState } from "react";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";
import FormInput from "../components/FormInput";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import female_ic from "../assets/female_ic.png";
import male_ic from "../assets/male_ic.png";
import others_ic from "../assets/others_ic.png";


export default function PersonalInfoScreen(){

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="text-center relative h-full grid grid-col-[3fr 1fr] items-center">
            <section className="flex flex-col gap-8 w-full">
                <FormInput label={"What is your name?"} inputPlaceHolder={'john@domain.com'} type={"text"}/>
                <div className="flex flex-col justify-center items-center">
                    <label className="text-lg">What is your gender?</label>
                    <div className="flex justify-around gap-5 w-full pt-2 pl-2 pr-2">
                        <div className="w-1/3 gap-1 border h-[80px] rounded flex flex-col justify-center items-center">
                            <img src={male_ic} width={25}/>
                            <div className="text-md">Male</div>
                        </div>
                        <div className="w-1/3 gap-1 border h-[80px] rounded flex flex-col justify-center items-center">
                            <img src={female_ic} width={25}/>
                            <div className="text-md">Female</div>
                        </div>
                        <div className="w-1/3 gap-1 border h-[80px] rounded flex flex-col justify-center items-center">
                            <img src={others_ic} width={25}/>
                            <div className="text-md">Others</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label className="text-lg">When is your birthday?</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy"
                        showFullMonthYearPicker
                        showMonthDropdown
                        yearDropdownItemNumber={100}
                        yearDropdownScrollable
                    />
                </div>
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