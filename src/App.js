import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavigationBar from "./components/Navbar";

// Home Page Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages
import AboutUsPage from "./pages/About";
import FaqPage from "./pages/Faqs";
import CoursesPage from "./pages/Courses";
import EnrollmentPage from "./pages/Enrollment";
import ContactPage from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Courses />
              <Testimonials />
              <Newsletter />
              <Faqs />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* About Us Page */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* FAQ Page */}
        <Route path="/faqs" element={<FaqPage />} />

        {/* Courses Page */}
        <Route path="/courses" element={<CoursesPage />} />

        {/* Enrollment Page */}
        <Route path="/enroll" element={<EnrollmentPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Privacy Policy Page */}
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Terms & Conditions Page */}
        <Route path="/terms" element={<TermsConditions />} />
       
      </Routes>
    </Router>
  );
};

export default App;
