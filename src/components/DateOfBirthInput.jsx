import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { calculateDate } from "../utils/calculateDate";
import AppModal from "./AppModal";
import { COLORS } from "../utils/color";
import AppButton from "./AppButton";

import "react-day-picker/style.css";


function DateOfBirthInput() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [openDOBModal, setOpenDOBModal] = useState(false);

    const handleDobModalOpen = () => {
        setOpenDOBModal(true);
    }
    const handleDobModalClose = () => {
        setOpenDOBModal(false);
    }

  return (
    <>
        <label className="text-lg">When is your birthday?</label>
        <p onClick={handleDobModalOpen} placeholder="DOB" className="cursor-pointer border h-[32px] rounded indent-2 mt-1 w-2/3 grid items-center">
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
                buttonClassName={`h-[40px] text-white text-md w-full rounded mt-3 m-auto`}
                bgColor={COLORS.appHardColor}
                onClick={handleDobModalClose}>
                Done
            </AppButton>
        </AppModal>}
    </>
  )
}

export default DateOfBirthInput;
