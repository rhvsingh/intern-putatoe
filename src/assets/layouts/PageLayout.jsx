import React from 'react'

const PageLayout = (props) => {
  return (
    <div className='pb-x-25 pb-y-25 bg--grey-2'>
        {props.children}
    </div>
  )
}

export default PageLayout