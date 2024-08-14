import { Route, Routes } from "react-router-dom";

import Onebox from "../Pages/onebox";
import Index from "../Pages";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/mailbox" element={<Onebox />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
