import React from "react";
import { motion } from "framer-motion";
import Chats from "./Chats";
import Close from "./img/Close.png"

const MiComponente = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 5, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {" "}
       <div className="flex">
        <img src={Close} onClick={onClose}
          className="  hover:bg-gray-100  hover:opacity-20 hover:rounded-xl w-8 mt-4  ml-[83%] cursor-pointer bg-slate-50 opacity-10 rounded-xl  "/>
       </div>
        <div className="w-[1100px] py-2 px-4 max-md:w-auto">
          <Chats />
        </div>
      </motion.div>
    </div>
  );
};

export default MiComponente;
