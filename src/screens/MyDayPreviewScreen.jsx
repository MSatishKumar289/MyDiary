import AppIcon from "../components/AppIcon";
import AppModal from "../components/AppModal";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";
import close_black_ic from "../assets/close_black_ic.png"


const dummyData = {
    dayWas:"joyfull",
    people: ["lover", "friends", "family", "noOne"],
    feelings: ["excited", "happy_", "proud", "shy", "calm", "lovely", "silly", "lonely", "sad", "angry_"],
    notes: "Something added"
}

export default function MyDayPreviewScreen() {
  const handleOk = () => {
    console.log("Ok");
    alert(dummyData.dayWas)
  }
  
  const handleClose = () => {
    console.log("close")
  }

  return (
    <div>
        <button className='absolute right-5 top-5 mb-3 cursor-pointer opacity-[0.4]' onClick={handleClose}>
            <img src={close_black_ic} width={15}/>
        </button>
        <p className="text-lg text-center font-medium">Your day was</p>
        <div className="flex mt-2 mb-8  pl-5 pr-5 justify-between">
            <AppIcon imageName={dummyData.dayWas} onClickIcon={() => {console.log("joyfull")}}/>
        </div>

        <label className="text-lg font-medium">You were with</label>
        <div className="flex mt-3 mb-8 pl-5 pr-5 justify-between">
            {dummyData.people.map((item) => {
                return <AppIcon imageName={item} size_H="auto" label={"Lover"} onClickIcon={() => {console.log("joyfull")}}/>
            })}
        </div>

        <label className="text-lg font-medium">Your feelings were</label>
        <div className="flex mt-3 justify-between flex-wrap">
            {dummyData.feelings.map((item) => {
                return <AppIcon imageName={item} container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Excited"} onClickIcon={() => {console.log("Excited")}}/>
            })}
        </div>

        <label className="text-lg font-medium">You wrote that...</label>
        <div className="flex mt-1 justify-between flex-wrap">
            <p placeholder="Notes" className="w-full text-[15px] mb-3">{dummyData.notes}</p>
            <AppButton
                buttonClassName={`h-[35px] text-white w-full rounded text-sm`}
                bgColor={COLORS.appHardColor} onClick={handleOk}>OK</AppButton>

        </div>

    </div>
  )
};
