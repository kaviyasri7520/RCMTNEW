import React, { useState } from 'react'
import { Route,Routes,BrowserRouter, Navigate } from 'react-router-dom'
import Container from './Container'
import Login from './pages/Loginpage/login'
import { RewardTrackTabs, AmazonSignUpUsers, BSImageChangerTabs,SearchandDiscover, InstagramTab, ReferredReferralTabs, TrackPurchaseTab } from './components/reactTabs/ReactTabs'
import MailSender from './pages/SupportMail/MailSender'
import RewardsTrack from './pages/RewardsTrack/RewardsTrack'
import MailTagCorrection from './pages/MailTagCorrection/MailTagCorrection'
import TaskRewards from './pages/TaskRewards/TaskRewards'
import SearchKeyWord from './pages/Search&Discover/SearchKeyWord'
import DealsView from './pages/DealsView/DealsView'
import UserInformation from './pages/UserInformation/UserInformation'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import BSImageChanger from './pages/BsImageChanger/BSImageChanger'
import TestUsers from './pages/TestUsers/TestUsers'









const {userInformationAuthorizedUsers} = require('./config/config.json')

const RoutePage = () => {
  
    let checkVerified = localStorage.getItem('isVerified')
    const [verifiedAuthentication,setVerifiedAuthentication] = useState(false)
    React.useEffect(() => {
      try{
        const currentUser = atob(localStorage.getItem('userId')) 
        const userVerification = userInformationAuthorizedUsers.includes(currentUser)
        setVerifiedAuthentication(userVerification)
      }
      catch(err){
        console.log(err)
      }
    },[])

  return (
    <BrowserRouter>
    <Routes>  
      <Route path='/' element={< Container/>} >
      {checkVerified==='TGLverified' ? <Route path='/' element={<Navigate replace to='/rewards-track' />} /> :<Route path='/' element={<Navigate replace to='/login'/>} />}
      <Route path='login' element={< Login/>} />
      <Route path='rewards-track' element={<RewardTrackTabs />} />
      <Route path='amazon-signup-users' element={<AmazonSignUpUsers />} />
      <Route path='referred&referral-users' element={<ReferredReferralTabs />} />
      <Route path='mail-tag-correction' element={<MailTagCorrection />} />
      <Route path='support-mail' element={<MailSender />} />
      <Route path='insta-account-verification' element={<InstagramTab />} />
      <Route path='track-purchase' element={<TrackPurchaseTab />} />
      <Route path='task-rewards' element={<TaskRewards />} />
      <Route path='search&discover' element={<SearchandDiscover />} />
      {verifiedAuthentication && <Route path='user-information' element={<UserInformation />} />}
      <Route path='deals-view' element={<DealsView />} />
      <Route path='banner&story-image-change' element={<BSImageChangerTabs />} />
      <Route path='test-users' element={<TestUsers />} />
    


      <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default RoutePage
