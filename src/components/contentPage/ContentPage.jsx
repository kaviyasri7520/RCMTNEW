import React from 'react'
import './ContentPage.css'
const ContentPage = ({children,dynamicHeight}) => {
  return (
    <div style={{height:dynamicHeight}} className='content-page' >
        {children}
    </div>
  )
}

export default ContentPage