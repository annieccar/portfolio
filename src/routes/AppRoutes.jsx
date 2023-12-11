import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
