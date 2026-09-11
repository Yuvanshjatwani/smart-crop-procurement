import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { bookingHistory } from "../../data/bookings";
import StatusBadge from "../../components/ui/StatusBadge";

export default function BookingHistory() {
  return (
    <div className="space-y-7">
      <Link to="/farmer/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500"><ArrowLeft size={16}/> Dashboard</Link>
      <div><p className="text-sm font-semibold text-brand-700">Records</p><h1 className="mt-1 text-3xl font-black">Booking history</h1><p className="mt-1 text-sm text-gray-500">Previous procurement visits.</p></div>
      <div className="card overflow-hidden">
        <div className="hidden grid-cols-[1.3fr_1fr_1fr_1fr_auto] gap-4 border-b bg-gray-50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-gray-400 md:grid"><span>Booking</span><span>Centre</span><span>Date / Slot</span><span>Queue</span><span>Status</span></div>
        {bookingHistory.map(b => <div key={b.id} className="grid gap-3 border-b p-5 last:border-0 md:grid-cols-[1.3fr_1fr_1fr_1fr_auto] md:items-center md:gap-4"><div><p className="text-xs text-gray-400 md:hidden">Booking</p><p className="font-bold">{b.id}</p></div><div><p className="text-xs text-gray-400 md:hidden">Centre</p><p className="text-sm text-gray-700">{b.centre}</p></div><div className="flex items-center gap-2"><CalendarDays size={15} className="text-gray-400"/><div><p className="text-sm font-semibold">{b.date}</p><p className="text-xs text-gray-500">{b.slot}</p></div></div><div><p className="text-xs text-gray-400 md:hidden">Queue</p><p className="text-sm font-semibold">{b.queue}</p></div><StatusBadge status={b.status}/></div>)}
      </div>
    </div>
  );
}