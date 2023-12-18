import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Resume from "../pages/Resume";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
