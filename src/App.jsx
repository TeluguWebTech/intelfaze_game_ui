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
import NavbarComp from './components/NavbarComp';
import BannerTransactions from './components/BannerTransactions';
import BannerTasks from './components/BannerTasks';
import BannerEvents from './components/BannerEvents';
import ComingSoon from './components/ComingSoon';
import HrDashboard from './hrmodule/HrDashboard';
import CTDashboard from './customerrecord/CTDashboard';
import CustomerList from './customerrecord/CustomerList';
import CustomerEngagement from './customerrecord/CustomerEngagement';
import SessionRecords from './customerrecord/SessionRecords';
import CustomTracking from './customerrecord/CustomTracking';
import FreqCustomers from './customerrecord/FreqCustomers';
import CustFeedBack from './customerrecord/CustFeedBack';
import BlockedCustom from './customerrecord/BlockedCustom';
import TotalEmp from './hrmodule/TotalEmp';
import LeaveAttandance from './hrmodule/LeaveAttandance';
import EmpPayRol from './empcomponents/EmpPayRol';
import PerformanceRev from './hrmodule/PerformanceRev';



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
    <NavbarComp />
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
      <Route path="/employees" element={ <EmpDashboard />} />
      <Route path="/contacts" element={ <ContactTable />} />
      <Route path="/transactions" element={ <BannerTransactions />} />
      <Route path="/tasks" element={ <BannerTasks/>} />
      <Route path="/add-event" element={ <BannerEvents/>} />
      <Route path="/inventory" element={ <ComingSoon />} />
      <Route path="/hr" element={ <HrDashboard />} />
      <Route path="/customers" element={ <CTDashboard />} />
      <Route path="/customer-list" element={ <CustomerList />} />
      <Route path="/customer-engagement" element={ <CustomerEngagement />} />
      <Route path="/session-record" element={ <SessionRecords />} />
      <Route path="/customer-activity" element={ <CustomTracking />} />
      <Route path="/frequent-customers" element={ <FreqCustomers />} />
      <Route path="/customer-feedback" element={ <CustFeedBack />} />
      <Route path="/blocked-customers" element={ <BlockedCustom />} />
      <Route path="/all-employees" element={ <TotalEmp />} />
      <Route path="/emp-attendance" element={ <LeaveAttandance />} />
      <Route path="/pay-rol" element={ <EmpPayRol />} />
      <Route path="/emp-performance" element={ <PerformanceRev />} />
      <Route path="/emp-complaints" element={ <ComingSoon />} />
      <Route path="/emp-open-positions" element={ <ComingSoon />} />
      <Route path="/training-sessions" element={ <ComingSoon />} />
    </Routes>
    

    {/* <CTableData />
     <ContactTable />
    <ViewContact /> */}

   </div>
  )
}

export default App
