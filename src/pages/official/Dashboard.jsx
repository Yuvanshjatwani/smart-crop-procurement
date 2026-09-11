import { CheckCircle2, ClipboardCheck, Clock3, Users, Wheat } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  [Wheat, "Today's bookings", "128", "Scheduled visits today"],
  [Users, "Waiting farmers", "24", "Across all queues"],
  [CheckCircle2, "Completed", "86", "Processed today"],
  [Clock3, "Available slots", "42", "Remaining capacity"],
];

export default function OfficialDashboard() {
  return (
    <div className="space-y-7">
      <div><p className="text-sm font-semibold text-brand-700">Operations</p><h1 className="mt-1 text-3xl font-black">Procurement centre dashboard</h1><p className="mt-1 text-sm text-gray-500">Model Grain Procurement Centre · 12 September 2026</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([Icon, label, value, note]) => <div className="card p-5" key={label}><div className="flex items-center justify-between"><Icon size={21} className="text-brand-700"/><span className="text-2xl font-black">{value}</span></div><p className="mt-4 text-sm font-bold">{label}</p><p className="mt-1 text-xs text-gray-500">{note}</p></div>)}</div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card p-6"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-800"><ClipboardCheck/></span><div><h2 className="font-black">Farmer verification</h2><p className="text-sm text-gray-500">Verify a booking before procurement.</p></div></div><Link to="/official/verification" className="btn btn-primary mt-6 w-full">Open verification</Link></div>
        <div className="card p-6"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-800"><Users/></span><div><h2 className="font-black">Queue management</h2><p className="text-sm text-gray-500">View and update all three queues.</p></div></div><Link to="/official/queues" className="btn btn-secondary mt-6 w-full">Manage queues</Link></div>
      </div>
      <div className="card p-6"><h2 className="font-black">Today's queue snapshot</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">{[["Queue A","4 waiting","Serving Suresh Pal"],["Queue B","6 waiting","Serving Anil Sharma"],["Queue C","3 waiting","Serving Priya Devi"]].map(([q,w,s]) => <div className="rounded-xl border border-gray-200 p-4" key={q}><p className="font-black">{q}</p><p className="mt-2 text-2xl font-black text-brand-800">{w.split(" ")[0]}</p><p className="text-xs text-gray-500">{w.split(" ").slice(1).join(" ")}</p><p className="mt-3 text-xs text-gray-500">{s}</p></div>)}</div></div>
    </div>
  );
}