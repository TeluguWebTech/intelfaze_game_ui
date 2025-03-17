import React from 'react'
import RevenueBlocks from './RevenueBlocks'
import RevShowList from './RevShowList'
import RevShowLocations from './RevShowLocations'
import RevShowTrt from './RevShowTrt'
import RevShowComision from './RevShowComision'
import RevShowPayments from './RevShowPayments'
import NavbarComp from '../components/NavbarComp'

const RevenueDashboard = () => {
  return (
   <div className="">
    {/* <NavbarComp /> */}
     <div>
      <RevenueBlocks />
    </div>
   </div>
  )
}

export default RevenueDashboard
