import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServicesSection from "./pages/Services";
import JobsSection from "./pages/Job";
import { Pricing } from "./pages/Pricing";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <div className="px-6 md:px-16 lg:px-28">
        <Navbar />
        <Routes>
          <Route path="/growvy/" element={<Home />} />
          <Route path="/growvy/services" element={<ServicesSection />} />
          <Route path="/growvy/jobs" element={<JobsSection />} />
          <Route path="/growvy/pricing" element={<Pricing />} />
          <Route path="/growvy/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
