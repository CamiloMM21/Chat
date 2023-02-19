import React from 'react'
import  More from "./img/more.png"
import Input from './Input';
// import AuthContext from '../../context/AuthContext'
const Chat =() =>{
  
// const [user,setUser]=useState();

// const onUser= ()=>{
//   user.map(
//     id,
//     user,(user(AuthContext))
//   )

// }



  return (
    <div className="">
    <div className="flex h-[50px] bg-gradient-to-r from-blue-800  to-cyan-500 items-center justify-between p-[10px] text-gray-300 max-sm:w-[217px] xl:w-[1022px] xl:rounded-md">
        <span className='max-sm:w-[250px] max-sm:text-sm '>juliana</span>
        <div className="flex gap-[10px] h-[24px] cursor-pointer">
        <img src={More} alt="" />
        </div>
    </div>
        
        <Input/>
    </div>
  )
}

export default Chat