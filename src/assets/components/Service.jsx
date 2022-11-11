import React from 'react'

const Service = ({ details }) => {
    return (
        <div className='services-child'>
            <div className='service-image-child'><img src={'intern-putatoe/images/service_logo/' + details.icon} alt={details.title} /></div>
            <div>{details.title}</div>
        </div>

    )
}

export default Service