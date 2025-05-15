import joyful_ic from "../assets/joyful_ic.png";
import sleep_ic from "../assets/sleep_ic.png";
import crying_ic from "../assets/crying_ic.png";
import happy_ic from "../assets/happy_ic.png";
import angry_ic from "../assets/angry_ic.png";

import lover_ic from "../assets/lover_ic.png";
import friends_ic from "../assets/friends_ic.png";
import family_ic from "../assets/family_ic.png";
import noOne_ic from "../assets/no-one.png";

import excited_ic from "../assets/excited_ic.png";
import happy from "../assets/happy.png";
import proud_ic from "../assets/proud_ic.png";
import shy_ic from "../assets/shy_ic.png";
import calm_ic from "../assets/calm_ic.png";
import lovely_ic from "../assets/lovely_ic.png";
import silly_ic from "../assets/silly_ic.png";
import lonely_ic from "../assets/lonely_ic.png";
import sad_ic from "../assets/sad_ic.png";
import angry from "../assets/angry.png";


export default function AppIcon({imageName, size_W="40px", size_H="40px", label, onClickIcon , container_W, gapInBtwLine}) {

  return (
    <div onClick={onClickIcon}
        className={`cursor-pointer flex flex-col justify-center items-center w-[${container_W}] mb-[${gapInBtwLine}]`}>
        {/* Below image icons for top icons */}
        {imageName == "joyfull" && <img className={`w-[${size_W}] h-[${size_H}]`} src={joyful_ic}/>}
        {imageName == "sleep" && <img className={`w-[${size_W}] h-[${size_H}]`} src={sleep_ic}/>}
        {imageName == "crying" && <img className={`w-[${size_W}] h-[${size_H}]`} src={crying_ic}/>}
        {imageName == "happy" && <img className={`w-[${size_W}] h-[${size_H}]`} src={happy_ic}/>}
        {imageName == "angry" && <img className={`w-[${size_W}] h-[${size_H}]`} src={angry_ic}/>}

        {/* Below image icons for Peoples */}
        {imageName == "lover" && <img className={`w-[${size_W}] h-[${size_H}]`} src={lover_ic}/>}
        {imageName == "friends" && <img className={`w-[${size_W}] h-[${size_H}]`} src={friends_ic}/>}
        {imageName == "family" && <img className={`w-[${size_W}] h-[${size_H}]`} src={family_ic}/>}
        {imageName == "noOne" && <img className={`w-[${size_W}] h-[${size_H}]`} src={noOne_ic}/>}


        {/* Below image icons for Feelings */}
        {imageName == "excited" && <img className={`w-[${size_W}] h-[${size_H}]`} src={excited_ic}/>}
        {imageName == "happy_" && <img className={`w-[${size_W}] h-[${size_H}]`} src={happy}/>}
        {imageName == "proud" && <img className={`w-[${size_W}] h-[${size_H}]`} src={proud_ic}/>}
        {imageName == "shy" && <img className={`w-[${size_W}] h-[${size_H}]`} src={shy_ic}/>}
        {imageName == "calm" && <img className={`w-[${size_W}] h-[${size_H}]`} src={calm_ic}/>}
        {imageName == "lovely" && <img className={`w-[${size_W}] h-[${size_H}]`} src={lovely_ic}/>}
        {imageName == "silly" && <img className={`w-[${size_W}] h-[${size_H}]`} src={silly_ic}/>}
        {imageName == "lonely" && <img className={`w-[${size_W}] h-[${size_H}]`} src={lonely_ic}/>}
        {imageName == "sad" && <img className={`w-[${size_W}] h-[${size_H}]`} src={sad_ic}/>}
        {imageName == "angry_" && <img className={`w-[${size_W}] h-[${size_H}]`} src={angry}/>}

        {label != "" && <label className="text-sm font-medium">{label}</label>}
    </div>
  )
};
