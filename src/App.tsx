import AOS from "aos";
import { Home } from "./pages"
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <Home />
  )
}

export default App