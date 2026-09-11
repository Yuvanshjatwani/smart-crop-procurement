import { ArrowLeft, ArrowRight, Clock3, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { centres } from "../../data/centres";
import ProgressSteps from "../../components/ProgressSteps";
import Button from "../../components/ui/Button";

export default function CentreSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(centres[0].id);
  return (
    <div className="mx-auto max-w-4xl">
      <Link to="/farmer/dashboard" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500"><ArrowLeft size={16}/> Dashboard</Link>
      <ProgressSteps current={2} steps={["Registration", "Centre", "Slot", "Produce", "Confirm"]} />
      <div className="mb-6"><h1 className="text-3xl font-black">Choose procurement centre</h1><p className="mt-1 text-sm text-gray-500">Select the centre where you want to bring your produce.</p></div>
      <div className="space-y-4">
        {centres.map(c => <button key={c.id} onClick={() => setSelected(c.id)} className={`card w-full p-5 text-left transition ${selected === c.id ? "border-2 border-brand-700 bg-brand-50/40" : "hover:border-gray-300"}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4"><span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-800 shadow-sm"><MapPin size={19}/></span><div><h2 className="font-black">{c.name}</h2><p className="mt-1 text-sm text-gray-500">{c.address}</p><div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold text-gray-600"><span>{c.distance}</span><span>•</span><span>{c.availableSlots} slots available</span><span>•</span><span className="inline-flex items-center gap-1"><Clock3 size={13}/>{c.hours}</span></div></div></div>
            <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${selected === c.id ? "bg-brand-800 text-white" : "bg-gray-100 text-gray-600"}`}>{selected === c.id ? "Selected" : "Select"}</span>
          </div>
        </button>)}
      </div>
      <div className="mt-6 flex justify-end"><Button onClick={() => navigate("/farmer/slots")}>Continue <ArrowRight size={17}/></Button></div>
    </div>
  );
}