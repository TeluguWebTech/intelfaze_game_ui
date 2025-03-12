import React, { useState } from 'react'

import LandingPage from './pages/LandingPage'
import ClientCRM from './clients/ClientCRM';
import CTableData from './clients/CTableData';
import ContactTable from './contacts/ContactTable';
import ViewContact from './contacts/ViewContact';
import TRTDashboard from './trtcomponents/TRTDashboard';
import RevenueDashboard from './revenuecomponents/RevenueDashboard';
import AccountsDashboard from './accountscomponents/AccountsDashboard';
import EmpDashboard from './empcomponents/EmpDashboard';
import SalesDashboard from './salescomponents/SalesDashboard';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import CAddClientForm from './clients/CAddClientForm';
import RevShowList from './revenuecomponents/RevShowList';
import CShowLocation from './clients/CShowLocation';
import CTrtSalesShow from './clients/CTrtSalesShow';
import CShowMatches from './clients/CShowMatches';
import PageNotFound from './PageNotFound';
import CShowComision from './clients/CShowComision';
import CServicesShow from './clients/CServicesShow';



const App = () => {
   const [isCollapsed, setIsCollapsed] = useState(false);

   const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
   <div className="">
    {/* <Dashboard /> */}
    {/* <SalesDashboard /> */}
    {/* <EmpDashboard /> */}
    {/* <AccountsDashboard /> */}
    {/* <RevenueDashboard /> */}
    {/* <TRTDashboard /> */}

    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/clients" element={<ClientCRM />} />
      <Route path="/machines" element={ <TRTDashboard />} />
      <Route path="/revenue" element={ <RevenueDashboard />} />
      <Route path="/accounts" element={ <AccountsDashboard />} />
      <Route path="/sales" element={ <SalesDashboard />} />
      <Route path="/add-client" element={ <CAddClientForm />} />
      <Route path="/clients-revenue" element={ <RevShowList />} />
      <Route path="/client-locations" element={ <CShowLocation />} />
      <Route path="/client-machines" element={ <CTrtSalesShow />} />
      <Route path="/client-matches" element={ <CShowMatches />} />
      <Route path="/not-found" element={ <PageNotFound />} />
      <Route path="/commissions" element={ <CShowComision />} />
      <Route path="/client-services" element={ <CServicesShow />} />
    </Routes>
    

    {/* <CTableData />
     <ContactTable />
    <ViewContact /> */}

   </div>
  )
}

export default App
