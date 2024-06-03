import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Resume from "../pages/Resume";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default AppRoutes;
