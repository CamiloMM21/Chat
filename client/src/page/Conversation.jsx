import React from 'react'
import Chat from '../components/Chat/Chat'
import Menu from '../components/Menu'

function Conversation() {
  return (
    <> 
        <Menu/>
    <div className='flex h-screen items-center justify-center '>
        <div className='flex rounded-xl border w-[54%] h-[55%] rounded-xl overflow-hidden max:w-[480px] sm:w-[60%] md:w-[70%] xl:w-[80%]  2xl:w-[100%]'>
            <Chat/>
        </div>
    </div>
    </>
  )
}

export default Conversation