import joyful_ic from "../assets/joyful_ic.png";
import sleep_ic from "../assets/sleep_ic.png";
import crying_ic from "../assets/crying_ic.png";
import happy_ic from "../assets/happy_ic.png";
import angry_ic from "../assets/angry_ic.png";
import AppIcon from "../components/AppIcon";


export default function MyDayScreen() {

  return (
    <div>
        <p className="text-lg text-center font-medium">When is your birthday?</p>
        <div className="flex mt-2 mb-8  pl-5 pr-5 justify-between">
            <AppIcon imageName="joyfull" onClickIcon={() => {console.log("joyfull")}}/>
            <AppIcon imageName="sleep" onClickIcon={() => {console.log("sleep")}}/>
            <AppIcon imageName="crying" onClickIcon={() => {console.log("crying")}}/>
            <AppIcon imageName="happy" onClickIcon={() => {console.log("happy")}}/>
            <AppIcon imageName="angry" onClickIcon={() => {console.log("angry")}}/>
        </div>

        <label className="text-lg font-medium">People</label>
        <div className="flex mt-3 mb-8 pl-5 pr-5 justify-between">
            <AppIcon imageName="lover" size_H="auto" label={"Lover"} onClickIcon={() => {console.log("joyfull")}}/>
            <AppIcon imageName="friends" size_H="auto" label={"Friends"}  onClickIcon={() => {console.log("sleep")}}/>
            <AppIcon imageName="family" size_H="auto" label={"Family"}  onClickIcon={() => {console.log("crying")}}/>
            <AppIcon imageName="noOne" size_H="auto" label={"No one"}  onClickIcon={() => {console.log("happy")}}/>
        </div>

        <label className="text-lg font-medium">Feelings</label>
        <div className="flex mt-3 justify-between flex-wrap">
            <AppIcon imageName="excited" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Excited"} onClickIcon={() => {console.log("Excited")}}/>
            <AppIcon imageName="happy_" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Happy"}  onClickIcon={() => {console.log("Happy")}}/>
            <AppIcon imageName="proud" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Proud"}  onClickIcon={() => {console.log("Proud")}}/>
            <AppIcon imageName="shy" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Shy"}  onClickIcon={() => {console.log("Shy")}}/>
            <AppIcon imageName="calm" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Calm"}  onClickIcon={() => {console.log("Calm")}}/>
            <AppIcon imageName="lovely" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Lovely"} onClickIcon={() => {console.log("Lovely")}}/>
            <AppIcon imageName="silly" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Silly"}  onClickIcon={() => {console.log("Silly")}}/>
            <AppIcon imageName="lonely" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Lonely"}  onClickIcon={() => {console.log("Lonely")}}/>
            <AppIcon imageName="sad" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Sad"}  onClickIcon={() => {console.log("Sad")}}/>
            <AppIcon imageName="angry_" container_W={"20%"} gapInBtwLine="60px" size_H="auto" label={"Angry"}  onClickIcon={() => {console.log("Angry")}}/>
        </div>

    </div>
  )
};
