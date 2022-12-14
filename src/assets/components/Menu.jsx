import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { HiUsers } from 'react-icons/hi'
import { BsFillChatTextFill } from 'react-icons/bs'

import MenuClass from '../css/Menu.module.css'

const Menu = () => {
  return (
    <div className='navigation-menu mob-max-width'>
      <ul>
        <li>
          <AiFillHome className='icons' />
          <div>Home</div>
        </li>
        <li>
          <HiUsers  className='icons' />
          <div>Profile</div>
        </li>
        <li>
          <div className={MenuClass.logo}><img src='intern-putatoe/images/logo.webp' alt='Potatoe' /></div>
        </li>
        <li>
          <div className={MenuClass.listIcon}><img src='intern-putatoe/images/list_icon.png' alt='List Icon' /></div>
          <div>Follow List</div>
        </li>
        <li>
          <BsFillChatTextFill className='icons' />
          <div>Chat</div>
        </li>
      </ul>
    </div>
  )
}

export default Menu