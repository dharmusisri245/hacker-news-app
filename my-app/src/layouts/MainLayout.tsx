import { useLocation } from "react-router-dom";

import Navbar from "../component/Navbar";

const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <main className="max-w-6xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;