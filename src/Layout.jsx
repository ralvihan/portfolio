import { Outlet } from "react-router-dom";
import Aurora from "./components/effects/Aurora";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Aurora di latar belakang */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#2E073F", "#000000", "#2E073F"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Navbar selalu muncul */}
      <Navbar />

      {/* Semua halaman akan tampil di sini */}
      <Outlet />
    </div>
  );
};

export default Layout;
