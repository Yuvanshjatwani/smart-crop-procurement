import { NavLink, Outlet, useLocation } from "react-router-dom";
import { History, Home, ListOrdered, MapPin, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import Logo from "../components/Logo";

const links = [
  { to: "/farmer/dashboard", label: "Dashboard", icon: Home },
  { to: "/farmer/centres", label: "New Booking", icon: MapPin },
  { to: "/farmer/queue", label: "Live Queue", icon: ListOrdered },
  { to: "/farmer/history", label: "Booking History", icon: History },
];

export default function FarmerLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app-shell bg-[#f7faf7]">
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-gray-600 md:hidden">
            {open ? <X /> : <Menu />}
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${isActive ? "bg-brand-50 text-brand-800" : "text-gray-600 hover:bg-gray-50"}`}>
                <Icon size={17} />{label}
              </NavLink>
            ))}
            <div className="ml-3 flex items-center gap-2 border-l pl-4 text-sm font-semibold text-gray-700">
              <UserRound size={17} /> Rajesh Kumar
            </div>
          </nav>
        </div>
        {open && (
          <nav className="border-t bg-white p-3 md:hidden">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold ${location.pathname === to ? "bg-brand-50 text-brand-800" : "text-gray-600"}`}>
                <Icon size={18} />{label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8"><Outlet /></main>
    </div>
  );
}