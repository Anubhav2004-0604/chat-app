import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'
import ChatContainer from '../components/ChatContainer'
import { ChatContext } from '../../context/ChatContext'
const HomePage = () => {

 const {selectedUser}= useContext(ChatContext);

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
      <div className={`backdrop-blur-xl border-2 border-gray-200 rounded-2xl overflow-hidden h-full grid grid-cols-1   ${selectedUser ?
        'md:grid-cols-[1.5fr_2fr_1.5fr] xl:grid-cols-[2fr_3.5fr_2fr]':'md:grid-cols-2'}`}>
        <Sidebar />
        <ChatContainer />
        <RightSidebar  />
         
      </div>
      
    </div>
  )
}

export default HomePage
