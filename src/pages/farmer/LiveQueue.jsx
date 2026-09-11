import { ArrowLeft, ChevronRight, CircleDot, ListOrdered, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { queueData } from "../../data/queues";

export default function LiveQueue() {
  const current = queueData.find(q => q.id === "B");
  return (
    <div className="space-y-7">
      <Link to="/farmer/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500"><ArrowLeft size={16}/> Dashboard</Link>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-semibold text-brand-700">Live queue</p><h1 className="mt-1 text-3xl font-black">Your queue status</h1><p className="mt-1 text-sm text-gray-500">Mock live data for tonight's frontend prototype.</p></div><button className="btn btn-outline"><RefreshCw size={16}/> Refresh</button></div>

      <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
        <div className="card p-6 text-center"><p className="text-sm font-bold text-gray-500">{current.name}</p><div className="mx-auto mt-5 flex h-32 w-32 items-center justify-center rounded-full border-8 border-brand-100 bg-brand-50"><div><p className="text-4xl font-black text-brand-900">#3</p><p className="text-xs font-semibold text-brand-700">your position</p></div></div><p className="mt-5 text-sm text-gray-600"><strong>{current.waiting}</strong> farmers waiting in this queue.</p><div className="mt-5 rounded-xl bg-gray-50 p-4 text-left"><p className="text-xs text-gray-400">Currently serving</p><p className="mt-1 font-bold">{current.current}</p></div></div>

        <div className="card p-5 sm:p-6"><div className="flex items-center justify-between border-b pb-4"><div><h2 className="font-black">All queues</h2><p className="text-xs text-gray-500">Centre-wide overview</p></div><CircleDot className="text-brand-700" size={20}/></div><div className="mt-5 space-y-3">{queueData.map(q => <div key={q.id} className={`rounded-xl border p-4 ${q.id === "B" ? "border-brand-200 bg-brand-50/50" : "border-gray-200"}`}><div className="flex items-center justify-between"><span className="font-black">{q.name}</span><span className="text-xs font-semibold text-gray-500">{q.waiting} waiting</span></div><div className="mt-2 flex items-center justify-between text-sm"><span>Serving: <strong>{q.current}</strong></span><span className="font-bold text-brand-800">Position {q.position}</span></div></div>)}</div></div>
      </div>
      <Link to="/farmer/history" className="inline-flex items-center gap-1 text-sm font-bold text-brand-800">View booking history <ChevronRight size={16}/></Link>
    </div>
  );
}