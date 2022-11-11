import React from 'react'

const SubCatServ = ({ details }) => {
    return (
        <div className='category-content'>
            <div className='category-services'>
                {details.map((item, i) => {
                    return (
                        <div className='category-services-child caterogy-childname' key={i}>
                            {item.img === '' ? item.title[0] : <img src={`intern-putatoe/images/${item.img}`} alt={item.title} />}
                            <span className='category-services-discount'>{item.discount}% Off</span>
                            <span className='category-services-title'>{item.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SubCatServ