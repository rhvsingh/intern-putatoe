import React from 'react'
import { FaMapMarkerAlt, FaBell, FaCartPlus, FaSearch, FaMicrophone } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className='map-noti-cart'>
        <label htmlFor="delivery-location">
          <FaMapMarkerAlt />
          <input type="text" id='delivery-location' name='delivery-location' value="Harhwa Fatak Nirala Nagar, Gorakhpur, Nir.." />
        </label>
        <FaBell />
        <FaCartPlus />
      </div>
      <div className='search-input'>
        <label htmlFor='search-product'>
          <FaSearch />
          <input type="text" id='search-product' name='search-product' placeholder='Search for Products' />
        </label>
        <FaMicrophone />
      </div>
    </header>
  )
}

export default Header