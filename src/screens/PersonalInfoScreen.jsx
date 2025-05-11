import React, { useState } from "react";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";
import AppInput from "../components/AppInput";
import FormInput from "../components/FormInput";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function PersonalInfoScreen(){

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="text-center relative h-full grid grid-col-[3fr 1fr] items-center">
            <section className="flex flex-col gap-8 w-full">
                <FormInput label={"What is your name?"} inputPlaceHolder={'john@domain.com'} type={"text"}/>
                <div className="flex flex-col justify-center items-center">
                    <label className="text-lg">What is your gender?</label>
                    <div className="flex justify-around gap-5 w-full pt-2 pl-6 pr-6">
                        <div className="w-1/3 border h-[120px] rounded flex flex-col justify-center items-center">
                            <div>😇</div>
                            <div className="text-xl">Male</div>
                        </div>
                        <div className="w-1/3 border h-[120px] rounded flex flex-col justify-center items-center">
                            <div>😇</div>
                            <div className="text-xl">Female</div>
                        </div>
                        <div className="w-1/3 border h-[120px] rounded flex flex-col justify-center items-center">
                            <div>😇</div>
                            <div className="text-xl">Others</div>
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