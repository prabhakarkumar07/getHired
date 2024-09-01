import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container ">
        <Header />
        <Outlet />
      </main>
      <div className="p-2 text-center bg-gray-800" mt-20>
        Prabhakar kumar 2024
      </div>
    </div>
  );
}

export default Applayout;
