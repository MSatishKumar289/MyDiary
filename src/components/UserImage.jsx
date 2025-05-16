import user_img from "../assets/user_img.png";
import edit_ic from "../assets/edit_ic.png";

function UserImage({onClick}) {

  return (
    <>
        <div className="w-[100px] h-[100px] rounded-[50%] bg-gray-400 grid items-center justify-center m-[auto] relative">
            <img src={user_img} className="w-[90px] h-[90px] rounded-[50%] bg-white"/>
            <img src={edit_ic} onClick={onClick} className="absolute w-[30px] h-[30px] right-0 bottom-0 bg-white rounded-[50%] cursor-pointer"/>
        </div>
    </>
  )
}

export default UserImage
