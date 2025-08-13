import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./pages/Contact";
import FAQAccordion from "./pages/Faq";
import PortfolioServices from "./pages/Portfolio";
import FreeQuoteForm from "./pages/GetAQoute";
import BlogPage from "./pages/Blogs/Blogs";
import BlogPostDetail from "./pages/Blogs/BlogPostDetails";
import ScrollToTopOnRouteChange from "./components/scrollTop";
import GoToTop from "./components/goTop";
import PageNotFound from "./pages/PageNotFound";
import ContentCreation from "./pages/Services/ContentCreation";
import EbayManagement from "./pages/Services/EbayManagement";


// Services - Main & Subpages
import Services from "./components/Home/Services";
import Ecommerce from "./pages/Services/Ecommerce";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import VideoEditing from "./pages/Services/VideoEditing";
import WebsiteDevelopment from "./pages/Services/WebsiteDevelopment";
import YouTubeAutomation from "./pages/Services/YoutubeAutomation";
import Seo from "./pages/Services/Seo";
import SocialMediaManagement from "./pages/Services/SocialMediaManagement";
import PerformanceMarketing from "./pages/Services/PerformanceMarketing";
import GraphicDesigning from "./pages/Services/GraphicDesigning";
import AccountCreation from "./pages/Services/AccountCreation";
import InvoiceGeneration from "./pages/Services/InvoiceGeneration";
import AmazonManagement from "./pages/Services/AmazonManagement"; // ✅ Newly Added
import AmazonVA from "./pages/Services/AmazonVA";
import WalmartManagement from "./pages/Services/WalmartManagement";
import TikTokShop from "./pages/Services/TikTokShop";


// Department Service Lists
import MarketingServices from "./components/Home/MarketingServices";
import EcommerceDepartmentServices from "./components/Home/EcommerceServices";

// Page animation wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// Animated Routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Basic Pages */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactForm /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQAccordion /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><PortfolioServices /></PageWrapper>} />
        <Route path="/getaqoute" element={<PageWrapper><FreeQuoteForm /></PageWrapper>} />
        <Route path="/blogs" element={<PageWrapper><BlogPage /></PageWrapper>} />
        <Route path="/blog/:id" element={<PageWrapper><BlogPostDetail /></PageWrapper>} />

        {/* Service Pages */}
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/services/content-creation" element={<PageWrapper><ContentCreation /></PageWrapper>} />
        <Route path="/services/graphic-designing" element={<PageWrapper><GraphicDesigning /></PageWrapper>} />
        <Route path="/services/account-creation" element={<PageWrapper><AccountCreation /></PageWrapper>} />
        <Route path="/services/invoice-generation" element={<PageWrapper><InvoiceGeneration /></PageWrapper>} />
        <Route path="/services/amazon-management" element={<PageWrapper><AmazonManagement /></PageWrapper>} /> {/* ✅ New Route */}
        <Route path="/services/amazon-va" element={<PageWrapper><AmazonVA /></PageWrapper>} />
        <Route path="/services/ebay-management" element={<PageWrapper><EbayManagement /></PageWrapper>} />
        <Route path="/services/walmart-management" element={<PageWrapper><WalmartManagement /></PageWrapper>} />
        <Route path="/services/tiktok-shop" element={<PageWrapper><TikTokShop /></PageWrapper>} />


        {/* Other Sub Services */}
        <Route path="/services/ecommerce" element={<PageWrapper><Ecommerce /></PageWrapper>} />
        <Route path="/services/digital-marketing" element={<PageWrapper><DigitalMarketing /></PageWrapper>} />
        <Route path="/services/video-editing" element={<PageWrapper><VideoEditing /></PageWrapper>} />
        <Route path="/services/website-development" element={<PageWrapper><WebsiteDevelopment /></PageWrapper>} />
        <Route path="/services/youtube-automation" element={<PageWrapper><YouTubeAutomation /></PageWrapper>} />
        <Route path="/services/seo" element={<PageWrapper><Seo /></PageWrapper>} />
        <Route path="/services/social-media-management" element={<PageWrapper><SocialMediaManagement /></PageWrapper>} />
        <Route path="/services/performance-marketing" element={<PageWrapper><PerformanceMarketing /></PageWrapper>} />

        {/* Department Service Lists */}
        <Route path="/services/marketing" element={<PageWrapper><MarketingServices /></PageWrapper>} />
        <Route path="/services/ecommerce-department" element={<PageWrapper><EcommerceDepartmentServices /></PageWrapper>} />

        {/* 404 Page */}
        <Route path="*" element={<PageWrapper><PageNotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <GoToTop />
        <ScrollToTopOnRouteChange />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
