import { Route, Routes } from "react-router-dom";
import Stages from "./pages/Stages";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div className="min-h-screen bg-qss-background font-inter">
      <Routes>
        <Route index element={<Landing />} />
        <Route path={"/stages/:stageSlug/:subStageSlug"} element={<Stages />} />
      </Routes>
    </div>
  );
};

export default App;
