import React, { useState, useEffect } from 'react'
import imgs from '../../assets/images/logs.png'
import india from '../../assets/images/in.png'
import usa from '../../assets/images/usa.png'
import './Header.css'
import { useNavigate } from "react-router-dom"
import { TbLogout } from 'react-icons/tb'



const Header = () => {
  let Navigate = useNavigate()
  const [currentCountry,setCurrentCountry] = useState("")
  const [countryName,setCountryName] = useState("")

useEffect(() => {
  const country = localStorage.getItem("selectedCountry")
  setCountryName(country.toUpperCase())
  if(country === "us"){
    setCurrentCountry(usa)
  }
  if(country === "in"){
    setCurrentCountry(india)
  }
},[])

const func_logout = () => {
    localStorage.removeItem('isVerified')
    Navigate('/login')
}
  return (
    <div className='header-container'>
      <div className="head-content-container">
        <div className='brand-images-container'><img className="syenapp-logo" src={imgs} alt="imgs"/><img title={`country-${countryName}`} className="country-indicator" src={currentCountry} alt="country-flag"/></div>
        <h1 className="application-title">Rewards Cash Management Tool</h1> 
        <button onClick={func_logout} className="logout-btn" title="session log out" ><a  className="atag" href="/">Log out<TbLogout className='logout-icon' /></a></button>
      </div>
    </div>
  )
}

export default Header;