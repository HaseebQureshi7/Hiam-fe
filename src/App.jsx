import Landing from "./pages/landing/Landing";
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Signup from "./pages/signup/Signup";
import MyPortfolio from "./pages/myPortfolio/MyPortfolio";

function App() {

  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="" element={<Landing />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Myportfolio" element={<MyPortfolio/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
