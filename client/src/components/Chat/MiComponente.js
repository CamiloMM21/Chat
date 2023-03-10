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
       <div className="relative ">
        <img src={Close} onClick={onClose}
          className="  bg-blue-600  hover:bg-blue-300   hover:opacity-20 hover:rounded-xl w-7 mt-4 absolute static ml-[81%] cursor-pointer bg-blue-50 opacity-40 rounded-md  "/>
       </div>
        <div className="w-[1100px] py-2 px-4 max-sm:w-auto pl-5  ">
          <Chats />
        </div>
      </motion.div>
    </div>
  );
};

export default MiComponente;
