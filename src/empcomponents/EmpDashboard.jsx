import React from 'react'
import EmpBlocks from './EmpBlocks'
import EmpShowAll from './EmpShowAll'
import EmpShowPay from './EmpShowPay'
import EmpShowTask from './EmpShowTask'
import EmpShowPerf from './EmpShowPerf'

const EmpDashboard = () => {
  return (
    <div>
      <EmpBlocks />
      <EmpShowAll />
      <EmpShowPay />
      <EmpShowTask />
      <EmpShowPerf />
    </div>
  )
}

export default EmpDashboard
