import  React,{useState} from 'react';
import './ReactTabs.css'
import Amazon from '../../pages/amazonUsers/AmazonUsers'
import Refferal, { FindReferrals } from '../../pages/Refferals/Referrals';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useNavigate } from 'react-router';
import VerifyInstaAccount, { VerifyInstaAccountRewardClaimedUsers } from '../../pages/VerifyInstaAccount/VerifyInstaAccount';
import TrackInAppPurchase from '../../pages/TrackInAppPurcahse/TrackInAppPurchase';
import { TrackFMTC, TrackRIC } from '../../pages/TrackInAppPurcahse/TrackNetwork';
import Reward2xStatusList from '../../pages/TrackInAppPurcahse/PurcahseRewardStatusList';
import { SiElastic } from 'react-icons/si'
import AmazonElecticDashboard from '../../pages/amazonUsers/AmazonElecticDashboard';
import { MdPendingActions,MdFindInPage, MdCampaign } from 'react-icons/md'
import { BsGiftFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import RewardedUsers from '../../pages/amazonUsers/RewardedUsers';
import MissingRewards from '../../pages/missingRewards/MissingRewards';
import CampaignView from '../../pages/Refferals/Campaign';
import UserReferralView from '../../pages/Refferals/UserReferralView';
import BSImageChanger from '../../pages/BsImageChanger/BSImageChanger';
import Banner from '../../pages/BsImageChanger/Banner';
import DailyUserEngagement from '../../pages/BsImageChanger/DailyUserEngagement'
import ReferralVerification from '../../pages/Refferals/ReferralpointsVerification'
import  RewardsTrack, { PaymentStatusTable }  from '../../pages/RewardsTrack/RewardsTrack';
import SearchDiscover from '../../pages/Search&Discover/SearchKeyWord'
import PopularSearch from '../../pages/Search&Discover/PopularSearch';





const RewardTrackTabs = () => {
  return(
    <div className="page-container">
  <Tabs>
      <TabList>
      <Tab><div className='react-tabs-title' ><FaUsers className='react-tabs-title-icon' />Reward Track</div></Tab>
      <Tab><div className='react-tabs-title' >Check Payment Status</div></Tab>

      </TabList>
      <TabPanel><RewardsTrack /></TabPanel>
      <TabPanel><PaymentStatusTable /></TabPanel>
     
    </Tabs>
    </div>
  
)       
}
export {RewardTrackTabs}

const ReferredReferralTabs = () => {
  return(
    <div className="page-container">
  <Tabs>
      <TabList>
      <Tab><div className='react-tabs-title' ><FaUsers className='react-tabs-title-icon' />NEW USER VERIFICATION</div></Tab>
      <Tab><div className='react-tabs-title' ><MdFindInPage className='react-tabs-title-icon' />FIND REFERRALS</div></Tab>
      <Tab><div className='react-tabs-title' ><MdCampaign className='react-tabs-title-icon' />CAMPAIGN</div></Tab>
      <Tab><div className='react-tabs-title' ><FaUsers className='react-tabs-title-icon' />USER REFERRAL VIEW</div></Tab>
      <Tab><div className='react-tabs-title' ><FaUsers className='react-tabs-title-icon' />REFERRAL VERIFICATION</div></Tab>

      </TabList>
      <TabPanel><Refferal /></TabPanel>
      <TabPanel><FindReferrals /></TabPanel>
      <TabPanel><CampaignView /></TabPanel>
      <TabPanel><UserReferralView /></TabPanel>
      <TabPanel><ReferralVerification /></TabPanel>

    </Tabs>
    </div>
  
)       
}

export {ReferredReferralTabs}

const AmazonSignUpUsers = () => {
  return(
    <div className="page-container">
      <Tabs>
      <TabList>
      <Tab><div className='react-tabs-title' ><MdPendingActions className='react-tabs-title-icon' />REWARDS PENDING USERS</div></Tab>
      <Tab><div className='react-tabs-title' ><BsGiftFill className='react-tabs-title-icon' />REWARDS CLAIMED USERS</div></Tab>
      <Tab><div className='react-tabs-title' ><SiElastic className='react-tabs-title-icon' />AMAZON DASHBOARD</div></Tab>
      </TabList>
      <TabPanel><Amazon /></TabPanel>
      <TabPanel><RewardedUsers /></TabPanel>
      <TabPanel><AmazonElecticDashboard /></TabPanel>
    </Tabs>
      </div>
  )
}

export {AmazonSignUpUsers}

const InstagramTab = () => {
  return(
    <div className="page-container">
    <Tabs>
    <TabList>
    <Tab><div className='react-tabs-title' ><MdPendingActions className='react-tabs-title-icon' />PENDING USERS</div></Tab>
    <Tab><div className='react-tabs-title' ><BsGiftFill className='react-tabs-title-icon' />APPROVED USERS</div></Tab>
    </TabList>
    <TabPanel><VerifyInstaAccount /></TabPanel>
    <TabPanel><VerifyInstaAccountRewardClaimedUsers /></TabPanel>
    </Tabs>
    </div>
  )
}

export {InstagramTab}

const TrackPurchaseTab = () => {
  
    let Navigate = useNavigate()
    React.useEffect(() => {
      try{
      let checkAuth = localStorage.getItem('isVerified')
      if(checkAuth !== 'TGLverified'){
        Navigate('/Login')
      }
      }
      catch(err){
        console.log(err)
      }
    },[])


  return(
    <div className="page-container">
          <Tabs>
          <TabList>
          <Tab>TRACK IN-APP PURCHASE</Tab>
          <Tab>MISSING REWARDS</Tab>
          <Tab>IN-APP PURCHASE REWARDS STATUS</Tab> 
          <Tab>FMTC</Tab>
          <Tab>RAKUTEN</Tab>
          <Tab>IMPACT</Tab>
          <Tab>CJ</Tab>          
          </TabList>
          <TabPanel><TrackInAppPurchase /></TabPanel>
          <TabPanel><MissingRewards /></TabPanel>
          <TabPanel><Reward2xStatusList /> </TabPanel> 
          <TabPanel><TrackFMTC TabName={'FMTC'} /></TabPanel>
          <TabPanel><TrackRIC TabName={'RAKUTEN'} /></TabPanel>
          <TabPanel><TrackRIC TabName={'IMPACT'} /></TabPanel>
          <TabPanel><TrackRIC TabName={'CJ'} /></TabPanel>  
          </Tabs>
    </div>
  )
}

export {TrackPurchaseTab}

const  BSImageChangerTabs= () => {
  return(
    <div className="page-container">
  <Tabs>
      <TabList>
      <Tab><div className='react-tabs-title' >BANNER IMAGE UPLOAD</div></Tab>
      <Tab><div className='react-tabs-title' >DAILY DEALS</div></Tab>
      <Tab><div className='react-tabs-title' >DAILY USER ENGAGEMENT</div></Tab>
      </TabList>
      <TabPanel><BSImageChanger /></TabPanel>
      <TabPanel><Banner /></TabPanel>
      <TabPanel><DailyUserEngagement /></TabPanel>
    </Tabs>
    </div>
 
)      
}

export { BSImageChangerTabs }


const  SearchandDiscover= () => {
  return(
    <div className="page-container">
  <Tabs>
      <TabList>
      <Tab><div className='react-tabs-title' >SEARCH & DISCOVER</div></Tab>
      <Tab><div className='react-tabs-title' >POPULAR SEARCH</div></Tab>
      </TabList>
      <TabPanel><SearchDiscover /></TabPanel>
      <TabPanel><PopularSearch/></TabPanel>
    </Tabs>
    </div>
 
)      
}

export { SearchandDiscover }

