import { Routes, Route } from "react-router-dom";
import {
    MainContainer
} from "../containers";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<SubRouter />} />
    </Routes>
  );
};

const SubRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
      </Routes>
    </>
  );
};

export default MainRouter;