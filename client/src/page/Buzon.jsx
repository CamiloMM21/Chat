import React from 'react'
import MessageInbox from '../components/admin/MessageInbox'
import NotificationCounter from '../components/menssages/NotificationCounter'
import Navbar from '../components/nav/Navbar'
function Buzon() {
  return (
    <div>
      <Navbar/>
      <div className='w-auto pl-[260px] max-sm:pl-[2px] h-[100vh] bg-gray-700 text-center pt-[110px]  '>
      <MessageInbox/>
      </div>
      <NotificationCounter/>
      </div>
  )
}

export default Buzon