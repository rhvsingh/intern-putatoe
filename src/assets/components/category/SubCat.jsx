import React from 'react'

const SubCat = ({ details }) => {
    return (
        <div className='category-content'>
            <div className="category-subheading">
                {details.subHeading}
            </div>
            <div className="category-child">
                {details.childData.map((items,i) => {
                    return (
                        <div className="category-child-each pb-x-50 pb-y-50" key={i}>
                            <div className='caterogy-childname'>
                                {items.img === '' ? items.title[0] : <img src={`intern-putatoe/images/${items.img}`} alt={items.title} />}
                            </div>
                            {items.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SubCat