import AOS from "aos";
import { Home } from "./pages"
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  )
}

export default App
