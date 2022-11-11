import React from 'react'

import Service from './Service'

const Services = () => {

  const data = [{
    icon: 'mobile_recharge.png',
    title: 'Prepaid Mobile Recharge'
  }, {
    icon: 'television.png',
    title: 'DTH Recharge'
  }, {
    icon: 'loan.png',
    title: 'Loans'
  }, {
    icon: 'promotion.png',
    title: 'Promotion'
  }, {
    icon: 'news.png',
    title: 'News'
  }, {
    icon: 'blog.png',
    title: 'Blog'
  }, {
    icon: 'jobs.png',
    title: 'Jobs'
  }, {
    icon: 'feedback.png',
    title: 'Anonymous Feedback'
  }, {
    icon: 'gas_booking.png',
    title: 'Gas Booking'
  }, {
    icon: 'electricity_bill.png',
    title: 'Electricity Bill'
  }, {
    icon: 'water_bill.png',
    title: 'Water Bill'
  }
  ]

  return (
    <div className='services section-padding-bgcolor'>
      {data.length > 0 && data.map((item,i) => <Service details={item} key={i} />)}
      <div className='services-child'>
        <div className='service-image-child'><img src='intern-putatoe/images/service_logo/see_more.png' alt='See More' /></div>
        <div>See More</div>
      </div>
      
    </div>
  )
}

export default Services