import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './component/Footer'
import OurCompany from './pages/OurCompany'
import GoalsObjectives from './pages/GoalsObjectives'
import MissionVision from './pages/MissionVision'
import PostConstruction from './pages/PostConstruction'
import DeepCleaning from './pages/DeepCleaning'
import MoveCleaning from './pages/MoveCleaning'
import WeeklyHousekeeping from './pages/WeeklyHousekeeping'
import FloorWash from './pages/FloorWash'
import Fumigation from './pages/Fumigation'
import CarpetChairWash from './pages/CarpetChairWash'
import HousekeepingTraining from './pages/HousekeepingTraining'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import CleaningToolsPage from './pages/CleaningToolsPage'
import CleaningMaterialsLagos from './pages/CleaningMaterialsLagos'
import PestControlStrategies from './pages/PestControlStrategies'
import DeepCleaningCostLagos from './pages/DeepCleaningCostLagos'
import PostConstructionCleaning from './pages/PostConstructionCleaning'
import ProfessionalCleaningNigeria from './pages/ProfessionalCleaningNigeria'
import WeeklyVsDeepCleaning from './pages/WeeklyVsDeepCleaning'
import OfficeCleaningBenefits from './pages/OfficeCleaningBenefits'
import RemoveStains from './pages/RemoveStains'
import FumigationLagosGuide from './pages/FumigationLagosGuide'
import BookingForm from './pages/BookingForm'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './pages/routes/ProtectedRoute'
import AdminLogin from './pages/AdminLogin'
import WhatsAppButton from './component/WhatsAppButton'
import ChatWidget from './component/ChatWidget'
import SingleBlog from './pages/SingleBlog'
import VerifyPayment from './pages/VerifyPayment'
import BookingSuccess from './pages/BookingSuccess'
import SearchPage from './pages/SearchPage'



const App = () => {

  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  return (
    <div>

      {!isAdminPage && <Navbar />}

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/our-goals" element={<GoalsObjectives />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/post-construction" element={<PostConstruction />} />
          <Route path="/deep-cleaning" element={<DeepCleaning />} />
          <Route path="/move-cleaning" element={<MoveCleaning />} />
          <Route path="/weekly-cleaning" element={<WeeklyHousekeeping />} />
          <Route path="/floor-wash" element={<FloorWash />} />
          <Route path="/fumigation" element={<Fumigation />} />
          <Route path="/carpet" element={<CarpetChairWash />} />
          <Route path="/house-keeping" element={<HousekeepingTraining />} />
          <Route path="/blog-page" element={<BlogPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/blog/top-7-cleaning-tools-for-cleaning-a-new-house-in-nigeria" element={<CleaningToolsPage />} />
          <Route path="/blog/top-5-best-places-to-buy-cleaning-materials-in-lagos" element={<CleaningMaterialsLagos />} />
          <Route path="/blog/how-to-employ-pest-control-strategies-in-your-home" element={<PestControlStrategies />} />
          <Route path="/blog/how-much-does-deep-cleaning-cost-in-lagos-2026-guide" element={<DeepCleaningCostLagos />} />
          <Route path="/blog/post-construction-cleaning-checklist-for-new-buildings" element={<PostConstructionCleaning />} />
          <Route path="/blog/why-professional-cleaning-services-nigeria" element={<ProfessionalCleaningNigeria />} />
          <Route path="/blog/top-10-benefits-of-regular-office-cleaning-services-1" element={<OfficeCleaningBenefits />} />
          <Route path="/blog/weekly-housekeeping-vs-deep-cleaning-whats-the-difference-2" element={<WeeklyVsDeepCleaning />} />
          <Route path="/blog/how-to-remove-tough-stains-from-carpets-and-upholstery" element={<RemoveStains />} />
          <Route path="/blog/fumigation-in-lagos-everything-you-need-to-know-before-booking" element={<FumigationLagosGuide />} />
          <Route path="booking-page" element={<BookingForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/payment-success" element={<VerifyPayment />} />
          <Route path="/booking-success/:reference" element={<BookingSuccess />} />
          <Route path="/search" element={<SearchPage/>} />
         

          <Route
            path="/admin"
            element={

              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      {!isAdminPage && <Footer />}
      <WhatsAppButton />
      <ChatWidget />

    </div>
  )
}

export default App