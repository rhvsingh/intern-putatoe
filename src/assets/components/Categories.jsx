import React from 'react'
import { data } from '../data'

import SubCat from './category/SubCat'
import SubCatServ from './category/SubCatServ'

const Categories = () => {
  return (
    <div className='category-container section-padding-bgcolor'>
      {data.map((items, i) => {
        return (
          <div className='category-box' key={i}>
            <h2 className='category-main-heading'>{items.mainHeading}</h2>
            {items.subData.map((item, i) => {
              return (
                item.subHeading === '' ? <SubCatServ key={i} details={item.childData} /> : <SubCat key={i} details={item} />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Categories