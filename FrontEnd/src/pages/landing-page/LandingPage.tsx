import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { Dashboard } from "./dashboard/Dashboard";
import { LandingPageWrapper } from "./landingPage-style";

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Navbar />
      <Dashboard />
    </LandingPageWrapper>
  );
};
