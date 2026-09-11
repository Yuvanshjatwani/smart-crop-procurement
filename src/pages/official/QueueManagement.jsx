import { Check, ListOrdered, UserRound } from "lucide-react";
import { useState } from "react";
import { queueData as initialQueues } from "../../data/queues";
import StatusBadge from "../../components/ui/StatusBadge";

export default function QueueManagement() {
  const [queues, setQueues] = useState(initialQueues);
  const complete = (queueId, farmerId) => {
    setQueues(prev => prev.map(q => q.id === queueId ? { ...q, farmers: q.farmers.map(f => f.id === farmerId ? { ...f, status: "Completed" } : f) } : q));
  };
  return (
    <div className="space-y-7">
      <div><p className="text-sm font-semibold text-brand-700">Operations</p><h1 className="mt-1 text-3xl font-black">Queue management</h1><p className="mt-1 text-sm text-gray-500">Mark farmers completed as procurement is finished. Changes are local mock state only.</p></div>
      <div className="grid gap-5 lg:grid-cols-3">
        {queues.map(q => <section className="card overflow-hidden" key={q.id}><div className="border-b bg-gray-50 p-5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><ListOrdered size={18} className="text-brand-800"/><h2 className="font-black">{q.name}</h2></div><span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-gray-600">{q.waiting} waiting</span></div><p className="mt-2 text-xs text-gray-500">Currently serving: <strong>{q.current}</strong></p></div><div className="space-y-3 p-4">{q.farmers.map(f => <div key={f.id} className="rounded-xl border border-gray-200 p-4"><div className="flex items-start justify-between gap-3"><div className="flex gap-2"><span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-800"><UserRound size={15}/></span><div><p className="font-bold">{f.name}</p><p className="text-xs text-gray-500">{f.id}</p></div></div><StatusBadge status={f.status}/></div><div className="mt-3 grid grid-cols-2 gap-2 text-xs"><div><span className="text-gray-400">Produce</span><p className="font-semibold">{f.produce}</p></div><div><span className="text-gray-400">Quantity</span><p className="font-semibold">{f.quantity}</p></div></div>{f.status !== "Completed" && <button onClick={() => complete(q.id, f.id)} className="btn btn-secondary mt-3 w-full text-xs"><Check size={15}/> Mark Completed</button>}</div>)}</div></section>)}
      </div>
    </div>
  );
}