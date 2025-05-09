import React from "react";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";

export default function LandingScreen(){
    return (
        <div className="text-center relative h-full">
            <section className="absolute left-0 right-0 top-[20vh]">
                <p className="text-4xl mb-1">My Diary</p>
                <p className="text-xsm">My special day</p>
            </section>
            <section className="absolute left-0 right-0 top-[calc(100%_-_70px)]">
                <AppButton
                    buttonClassName={`h-[50px] text-white w-3/4 rounded font-bold`}
                    bgColor={COLORS.appHardColor}>Next</AppButton>
            </section>
        </div>
    )
}