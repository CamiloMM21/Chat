import React from 'react'

function Message() {
  

  return (
    
      
    <div className='flex gap-[20px] max-sm:w-[250px] '>
      <div className='messageInfo'>
        <img src="https://play-lh.googleusercontent.com/7ZocjynCfsulgqQ30d6d4pirAKrEDlRH5iRCJZFnB8c7lSLW5-1WpzrDk-3_3P-ht5du" alt=""  className='w-[40px] h-[40px] rounded-[50%] object-cover '/>
        <span className='font-serif  text-gray-400 max-sm:text-sm'>just now</span>
      </div>
      <div className='flex max-w-[80%] gap-2.5 flex-col-reverse'>
        <p className='bg-blue-200 pl-2.5 mb-2 pr-5 rounded-r-lg rounded-b-lg max-w-max max-sm:text-sm' >_Hello</p>
        <img src="" alt="" className='w-[50%] border-4 border-blue-300 rounded-r-xl rounded-b-xl '/>
      </div>

    </div>
    
  )
}

export default Message;