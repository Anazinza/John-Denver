import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

const RootRouter = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <MainRouter />
    </BrowserRouter>
  );
};

export default RootRouter;