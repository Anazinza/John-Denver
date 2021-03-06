import { Routes, Route } from "react-router-dom";
import {
  MainContainer,
  WriteContainer,
  ReadContainer
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
        <Route path="/" element={<MainContainer />} />
        <Route path="/write" element={<WriteContainer />} />
        <Route path="/read" element={<ReadContainer />} />
      </Routes>
    </>
  );
};

export default MainRouter;