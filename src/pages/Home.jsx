import AboutGrowvy from "../components/About";
import CallToAction from "../components/CallToAction";
import EcommerceOwnerSection from "../components/E-Commerce";
import GrowvyFooterSection from "../components/Footer";
import JobSeeker from "../components/JobSeeker";
import HeroSection from "./HeroSection";
import UserTypesSection from "./UserType";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutGrowvy />
      <UserTypesSection />
      <JobSeeker />
      <EcommerceOwnerSection />
      <CallToAction />
      <GrowvyFooterSection />
    </>
  );
}

export default Home;
