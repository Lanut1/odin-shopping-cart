import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootElement: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootElement;