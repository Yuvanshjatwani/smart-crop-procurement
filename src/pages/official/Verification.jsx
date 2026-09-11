import { CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Field from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import StatusBadge from "../../components/ui/StatusBadge";

const mock = { name: "Rajesh Kumar", phone: "******4821", produce: "Wheat", quantity: "42 Quintal", slot: "10:00 – 11:00 AM", queue: "Queue B" };

export default function Verification() {
  const [id, setId] = useState("");
  const [verified, setVerified] = useState(false);
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div><p className="text-sm font-semibold text-brand-700">Official portal</p><h1 className="mt-1 text-3xl font-black">Farmer verification</h1><p className="mt-1 text-sm text-gray-500">Enter a booking ID to view the registered procurement details.</p></div>
      <div className="card p-5 sm:p-7"><div className="flex flex-col gap-4 sm:flex-row sm:items-end"><div className="flex-1"><Field label="Booking ID" placeholder="e.g. SCPS-260911-042" value={id} onChange={e => setId(e.target.value)}/></div><Button onClick={() => setVerified(true)}><Search size={17}/> Verify booking</Button></div><p className="mt-3 text-xs text-gray-400">Try any ID — this is mock verification data.</p></div>
      {verified && <div className="card overflow-hidden"><div className="flex items-center justify-between border-b p-5"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><CheckCircle2/></span><div><h2 className="font-black">Booking verified</h2><p className="text-xs text-gray-500">Mock result for {id || "SCPS-260911-042"}</p></div></div><StatusBadge status="Confirmed"/></div><div className="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">{[["Farmer name",mock.name],["Phone",mock.phone],["Produce",mock.produce],["Quantity",mock.quantity],["Time slot",mock.slot],["Queue",mock.queue]].map(([l,v]) => <div key={l}><p className="text-xs text-gray-400">{l}</p><p className="mt-1 font-bold">{v}</p></div>)}</div><div className="border-t bg-gray-50 p-5"><div className="flex items-center gap-2 text-sm font-bold text-emerald-700"><ShieldCheck size={17}/> Identity / booking match status: verified (prototype)</div></div></div>}
    </div>
  );
}