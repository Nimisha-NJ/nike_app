
const Button = ({label , iconUrl}) => {
  return (
    <button className=" flex justify-center items-center gap-2 text-lg font-montserrat px-7 py-4 leading-none bg-coral-red rounded-full text-white">{label}
     <img src={iconUrl} alt="arrow rigt icon" className=" ml-2 rounded-full w-5 h-5"/>
    </button>
   
  )
}

export default Button