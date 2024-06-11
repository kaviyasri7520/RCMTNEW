import React from 'react'
import { Outlet } from 'react-router'
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import ContentPage from './components/contentPage/ContentPage'
import { useState } from 'react';

const { documentTitle } = require('./config/config.json')

const Container = () => {
  let Navigate = useNavigate()
  const Location = useLocation()
  let checkVerified = localStorage.getItem('isVerified')
  const [dynamicHeight,setDynamicHeight] =  useState('100vh')

  const { pathname } = Location;

  React.useEffect(() => {
      checkVerified !== 'TGLverified' && Navigate('/login')
      const { pathname } = Location;
      const currentLocation = pathname.replace("/","");
      document.title = documentTitle + currentLocation;

      if(currentLocation === 'login'){
        setDynamicHeight('100vh')
      }
      else{
        setDynamicHeight('90vh')
      }
  },[pathname])


  return (
    <div className='outer-layout'>
    {pathname.toLowerCase() !== '/login' &&<Header />}
    <div className='layout-container'>
    {pathname.toLowerCase() !== '/login' && <Sidebar />}
    <ContentPage dynamicHeight={dynamicHeight} ><Outlet/></ContentPage>
    </div>
    </div>
  )
}

export default Container