import React from "react";
import More from "./img/more.png";
import Chats from "./Chats";
// import AuthContext from '../../context/AuthContext'
const Chat = () => {
  // const [user,setUser]=useState();

  // const onUser= ()=>{
  //   user.map(
  //     id,
  //     user,(user(AuthContext))
  //   )

  // }

  return (
    <div className="">
      <div className="flex h-[50px] bg-gradient-to-r from-blue-800  to-cyan-500 items-center justify-between p-[10px] text-gray-300 max-sm:w-[79%] xl:w-[1022px] xl:rounded-md md:w-[100%] 2xl:w-[100%] md:w-[100%] ">
        <span className="max-sm:w-[250px] max-sm:text-sm ">juliana</span>
        <div className="flex gap-[10px] h-[24px] cursor-pointer">
          <img src={More} alt="" />
        </div>
      </div>

      <Chats />
    </div>
  );
};

export default Chat;
