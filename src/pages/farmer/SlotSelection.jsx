import { ArrowLeft, ArrowRight, CalendarDays, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { slots } from "../../data/slots";
import ProgressSteps from "../../components/ProgressSteps";
import Button from "../../components/ui/Button";
import StatusBadge from "../../components/ui/StatusBadge";

export default function SlotSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(slots[1].id);
  return (
    <div className="mx-auto max-w-4xl">
      <Link to="/farmer/centres" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500"><ArrowLeft size={16}/> Change centre</Link>
      <ProgressSteps current={3} steps={["Registration", "Centre", "Slot", "Produce", "Confirm"]} />
      <div className="mb-6"><h1 className="text-3xl font-black">Select a time slot</h1><p className="mt-1 text-sm text-gray-500">Prototype date: 12 September 2026.</p></div>
      <div className="grid gap-3">
        {slots.map(s => {
          const remaining = s.capacity - s.booked;
          const full = remaining <= 0;
          return <button key={s.id} disabled={full} onClick={() => setSelected(s.id)} className={`card flex items-center gap-4 p-5 text-left ${selected === s.id ? "border-2 border-brand-700 bg-brand-50/40" : ""} ${full ? "cursor-not-allowed opacity-60" : ""}`}>
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${selected === s.id ? "bg-brand-800 text-white" : "bg-gray-100 text-gray-500"}`}>{selected === s.id ? <Check/> : <CalendarDays/>}</span>
            <span className="min-w-0 flex-1"><span className="block font-black">{s.label}</span><span className="mt-1 block text-xs text-gray-500">{s.booked} booked · {remaining > 0 ? `${remaining} seats remaining` : "No seats remaining"}</span></span>
            <StatusBadge status={full ? "Full" : "Available"}/>
          </button>
        })}
      </div>
      <div className="mt-6 flex justify-end"><Button disabled={!selected} onClick={() => navigate("/farmer/produce")}>Continue <ArrowRight size={17}/></Button></div>
    </div>
  );
}