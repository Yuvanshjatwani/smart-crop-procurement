import { NavLink, Outlet } from "react-router-dom";
import { ClipboardCheck, LayoutDashboard, ListOrdered, Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import Logo from "../components/Logo";

const links = [
  { to: "/official/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/official/verification", label: "Verify Farmer", icon: ShieldCheck },
  { to: "/official/queues", label: "Queue Management", icon: ListOrdered },
];

export default function OfficialLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app-shell bg-[#f7faf7]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="hidden border-l pl-4 text-sm font-semibold text-gray-500 sm:block">Official Portal</span>
          </div>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-gray-600 md:hidden">{open ? <X /> : <Menu />}</button>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${isActive ? "bg-brand-50 text-brand-800" : "text-gray-600 hover:bg-gray-50"}`}>
                <Icon size={17} />{label}
              </NavLink>
            ))}
            <div className="ml-3 border-l pl-4 text-sm font-semibold text-gray-700">Centre Official</div>
          </nav>
        </div>
        {open && <nav className="border-t p-3 md:hidden">{links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className="flex gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-gray-600"><Icon size={18}/>{label}</NavLink>)}</nav>}
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8"><Outlet /></main>
    </div>
  );
}