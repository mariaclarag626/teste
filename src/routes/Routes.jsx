import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Header from "../components/Header";
import Footer from "../components/footer";

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes" element={<Detalhes />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRoutes;
