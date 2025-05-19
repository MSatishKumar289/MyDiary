import { useRef, useState } from "react";
import user_img from "../assets/user_img.png";
import edit_ic from "../assets/edit_ic.png";

function UserImage() {
    const [selectedImage, setSelectImage] = useState("")
    const inputFile = useRef();

    const handleImageUpload = (event) => {
        event.preventDefault();
        inputFile.current.click();
        console.log("CLicked")
    }

    const handleOnFileSelect = (event) => {
        const uploadFile = inputFile.current.files[0];
        const cachedUrl = URL.createObjectURL(uploadFile);
        setSelectImage(cachedUrl)
    }

    return (
        <>
            <div className="w-[100px] h-[100px] rounded-[50%] bg-gray-400 grid items-center justify-center m-[auto] relative">
                <img src={selectedImage == "" ? user_img : selectedImage} className="w-[90px] h-[90px] rounded-[50%] bg-white"/>
                <img src={edit_ic} onClick={handleImageUpload} className="absolute w-[30px] h-[30px] right-0 bottom-0 bg-white rounded-[50%] cursor-pointer"/>
            </div>
            <input type="file" id="file" ref={inputFile} onChange={handleOnFileSelect} hidden/>
        </>
    )
}

export default UserImage
