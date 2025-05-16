import { useState } from "react";
import AppIcon from "../components/AppIcon";
import AppModal from "../components/AppModal";
import AppButton from "../components/AppButton";
import { COLORS } from "../utils/color";


export default function MyDayScreen() {
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaValue = (e) => {
    setTextAreaValue(e.target.value);
    console.log(e.target.value);
  }

  const handleModalOpen = () => {
    setShowNotesModal(true)
  }
  const handleModalClose = () => {
    setShowNotesModal(false);
  }

  return (
    <div>
      <p className="text-lg text-center font-medium">How was your day?</p>
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
          <AppIcon imageName="excited" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Excited"} onClickIcon={() => {console.log("Excited")}}/>
          <AppIcon imageName="happy_" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Happy"}  onClickIcon={() => {console.log("Happy")}}/>
          <AppIcon imageName="proud" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Proud"}  onClickIcon={() => {console.log("Proud")}}/>
          <AppIcon imageName="shy" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Shy"}  onClickIcon={() => {console.log("Shy")}}/>
          <AppIcon imageName="calm" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Calm"}  onClickIcon={() => {console.log("Calm")}}/>
          <AppIcon imageName="lovely" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Lovely"} onClickIcon={() => {console.log("Lovely")}}/>
          <AppIcon imageName="silly" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Silly"}  onClickIcon={() => {console.log("Silly")}}/>
          <AppIcon imageName="lonely" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Lonely"}  onClickIcon={() => {console.log("Lonely")}}/>
          <AppIcon imageName="sad" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Sad"}  onClickIcon={() => {console.log("Sad")}}/>
          <AppIcon imageName="angry_" container_W="20%" gapInBtwLine="20" size_W="40px" size_H="auto" label={"Angry"}  onClickIcon={() => {console.log("Angry")}}/>
      </div>

      <label className="text-lg font-medium">Notes</label>
      <div className="flex mt-2 justify-between flex-wrap">
        <textarea placeholder="Notes" value={textAreaValue} onClick={handleModalOpen} className="w-full min-h-[100px] border rounded p-2"/>
        {showNotesModal && <AppModal onClose={handleModalClose}>
          <label className="text-md">Notes:</label>
          <textarea placeholder="Notes" value={textAreaValue} onChange={handleTextAreaValue} className="w-full min-h-[300px] border rounded p-2 mt-2"/>
          <AppButton
            buttonClassName={`h-[35px] text-white w-full rounded text-sm`}
            bgColor={COLORS.appHardColor} onClick={handleModalClose}>Done</AppButton>
        </AppModal>}
      </div>

    </div>
  )
};
