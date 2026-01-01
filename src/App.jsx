import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout";
import Dashboard from "./pages/dashBoard/DashBoard";

// Dynamic Page Imports
import Websites from "./pages/websites/Websites";
import AddWebsite from "./pages/websites/AddWebsite";
import SobAdmin from "./pages/sobAdmin/SobAdmin";
import AddSobAdmin from "./pages/sobAdmin/AddSobAdmin";
import Account from "./pages/account/Account";
import AddStaffForm from "./pages/account/AddStaffForm";
import ProxyVPN from "./pages/proxyvpn/ProxyVPN";
import AddProxyVPN from "./pages/proxyvpn/AddProxyVPN";
import Payload from "./pages/payload/Payload";

// Updated import
import { Domain, AppNotice, AppAds, EShop, Licence, Json, Email, Gateway, PanelAPI, OrderReport, PrivacyPolicy, Settings } from "./pages/modules";
import EShopPage from "./pages/e-shop/EShopPage";
import AddProduct from "./pages/e-shop/AddProduct";
import LicencePage from "./pages/licence/LicencePage";
import AddLicence from "./pages/licence/AddLicence";
import JsonPage from "./pages/json/JsonPage";
import AddJson from "./pages/json/AddJson";

import Users from "./pages/user/Users";
import AddUser from "./pages/user/AddUser";
import Reseller from "./pages/reseller/Reseller";
import AddReseller from "./pages/reseller/AddReseller";
import Server from "./pages/server/Server";
import AddServer from "./pages/server/AddServer";
import DNS from "./pages/dns/DNS";
import AddDNS from "./pages/dns/AddDNS";
import AddAPI from "./pages/dns/AddAPI";
import Application from "./pages/application/Application";
import AddApplication from "./pages/application/AddApplication";
import PanelNotice from "./pages/notice/PanelNotice";
import AddPanelNotice from "./pages/notice/AddPanelNotice";
import Theme from "./pages/theme/Theme";

// New imports for Panel API, Config Version, Order Report
import PanelApiPage from "./pages/panelapi/PanelApiPage";
import AddApiKey from "./pages/panelapi/AddApiKey";
import ConfigVersionPage from "./pages/configversion/ConfigVersionPage";
import AddConfigVersion from "./pages/configversion/AddConfigVersion";
import OrderReportPage from "./pages/orderreport/OrderReportPage";
import GenerateReport from "./pages/orderreport/GenerateReport";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* DEFAULT ROUTE WHEN USER HITS "/" */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Core Management */}
          <Route path="websites" element={<Websites />} />
          <Route path="websites/add" element={<AddWebsite />} />
          <Route path="sob-admin" element={<SobAdmin />} />
          <Route path="sob-admin/add" element={<AddSobAdmin />} />
          <Route path="users" element={<Users />} />
          <Route path="users/add" element={<AddUser />} />
          <Route path="account" element={<Account />} />
          <Route path="account/add" element={<AddStaffForm />} />
          <Route path="reseller" element={<Reseller />} />
          <Route path="reseller/add" element={<AddReseller />} />

          {/* Infrastructure */}
          <Route path="server" element={<Server />} />
          <Route path="server/add" element={<AddServer />} />
          <Route path="proxy-vpn" element={<ProxyVPN />} />
          <Route path="proxy-vpn/add" element={<AddProxyVPN />} />
          <Route path="payload" element={<Payload />} />
          <Route path="domain" element={<Domain />} />
          <Route path="dns" element={<DNS />} />
          <Route path="dns/add" element={<AddDNS />} />
          <Route path="dns/add-api" element={<AddAPI />} />

          {/* Application */}
          <Route path="application" element={<Application />} />
          <Route path="application/add" element={<AddApplication />} />
          <Route path="panel-notice" element={<PanelNotice />} />
          <Route path="panel-notice/add" element={<AddPanelNotice />} />
          <Route path="app-notice" element={<AppNotice />} />
          <Route path="app-notice/add" element={<AddPanelNotice />} />
          <Route path="app-ads" element={<AppAds />} />
          <Route path="app-ads/add" element={<AddPanelNotice />} />

          {/* Management */}
          <Route path="e-shop" element={<EShopPage />} />
          <Route path="e-shop/add" element={<AddProduct />} />
          <Route path="licence" element={<LicencePage />} />
          <Route path="licence/add" element={<AddLicence />} />
          <Route path="json" element={<JsonPage />} />
          <Route path="json/add" element={<AddJson />} />
          <Route path="theme" element={<Theme />} />

          {/* System */}
          <Route path="email" element={<Email />} />
          <Route path="gateway" element={<Gateway />} />
          <Route path="panel-api" element={<PanelApiPage />} /> {/* Updated route */}
          <Route path="panel-api/add" element={<AddApiKey />} /> {/* New route */}
          <Route path="config-version" element={<ConfigVersionPage />} /> {/* Updated route */}
          <Route path="config-version/add" element={<AddConfigVersion />} /> {/* New route */}
          <Route path="order-report" element={<OrderReportPage />} /> {/* Updated route */}
          <Route path="order-report/generate" element={<GenerateReport />} /> {/* New route */}

          {/* Settings */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="settings" element={<Settings />} />

          {/* Fallback to Dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;