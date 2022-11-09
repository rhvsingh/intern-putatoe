import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { HiUsers } from 'react-icons/hi'
import { BsFillChatTextFill } from 'react-icons/bs'

const Menu = () => {
  return (
    <div className='navigation-menu'>
      <ul>
        <li>
          <div><AiFillHome /></div>
          Home
        </li>
        <li>
          <div><HiUsers /></div>
          Profile
        </li>
        <li>Logo</li>
        <li>
          <div>Icon</div>
          Follow List
        </li>
        <li>
          <div><BsFillChatTextFill /></div>
          Chat
        </li>
      </ul>
    </div>
  )
}

export default Menu