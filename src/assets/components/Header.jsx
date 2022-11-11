import React, { useState } from 'react'
import { FaMapMarkerAlt, FaBell, FaCartPlus, FaSearch, FaMicrophone } from 'react-icons/fa'

import HeaderClasses from '../css/Header.module.css'

const Header = () => {

  const [location, setLocation] = useState('Harhwa Fatak Nirala Nagar, Gorakhpur, Nir..');
  const [searchProduct, setSearchProduct] = useState('');

  return (
    <>
    <header>
      <div className='map-noti-cart d-flex justify-center align-center'>
        <label htmlFor="delivery-location" className={`${HeaderClasses.deliveryLabel} d-flex align-center`}>
          <FaMapMarkerAlt className={HeaderClasses.mapIcon} />
          <input type="text" id={HeaderClasses.deliveryLocation} name='delivery-location' value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <div className={`${HeaderClasses.bellCart} d-flex align-center`}>
          <div className='pos-rel'>
            <FaBell className={HeaderClasses.bell} />
            <div className={`${HeaderClasses.notiCount} d-flex align-center justify-center`}>0</div>
          </div>
          <FaCartPlus className={HeaderClasses.cart} />
        </div>
      </div>
    </header>
      <div className={`${HeaderClasses.searchInput} d-flex justify-center  align-center`}>
        <label htmlFor='search-product' className={HeaderClasses.searchLabel}>
          <FaSearch className={HeaderClasses.searchIcon} />
          <input type="text" id={HeaderClasses.searchProduct} name='search-product' placeholder='Search for Products...' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
        </label>
        <FaMicrophone className={HeaderClasses.searchMicrophone} />
      </div>
    </>
  )
}

export default Header