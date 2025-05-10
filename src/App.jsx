import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServicesSection from "./pages/Services";
import JobsSection from "./pages/Job";
import { Pricing } from "./pages/Pricing";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-gradient-to-br from-white to-green-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/jobs" element={<JobsSection />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
