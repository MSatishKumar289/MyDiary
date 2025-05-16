export default function GenderCard({onClick, gender, iconName, iconWidth = 25, iconLabel}) {
  return (
    <div onClick={onClick} 
        className={`w-1/3 gap-1 border h-[100px] rounded flex flex-col justify-center items-center cursor-pointer ${gender === "" && "opacity-[1]"} ${gender === iconLabel ? "opacity-[1] border-gray-600 border-[2px] font-semibold" : "opacity-[0.1]"}`}>
        <img src={iconName} width={iconWidth}/>
        <div className="text-md">{iconLabel}</div>
    </div>
  )
}
