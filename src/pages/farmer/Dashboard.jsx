import { CalendarDays, ChevronRight, Clock3, ListOrdered, MapPin, Package, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { currentBooking } from "../../data/bookings";
import StatusBadge from "../../components/ui/StatusBadge";

export default function Dashboard() {
  return (
    <div className="space-y-7">
      <div><p className="text-sm font-semibold text-brand-700">Farmer portal</p><h1 className="mt-1 text-3xl font-black text-gray-900">Good morning, Rajesh</h1><p className="mt-1 text-sm text-gray-500">Here is the status of your procurement visit.</p></div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [MapPin, "Centre", currentBooking.centre],
          [CalendarDays, "Date", currentBooking.date],
          [Clock3, "Time slot", currentBooking.slot],
          [ListOrdered, "Queue", currentBooking.queue],
        ].map(([Icon, label, value]) => <div className="card p-5" key={label}><Icon size={20} className="text-brand-700"/><p className="mt-3 text-xs font-bold uppercase tracking-wide text-gray-400">{label}</p><p className="mt-1 text-sm font-bold text-gray-800">{value}</p></div>)}
      </div>

      <div className="card overflow-hidden">
        <div className="flex flex-col gap-3 border-b p-5 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="font-black">Current booking</h2><p className="mt-1 text-xs text-gray-500">Booking ID: {currentBooking.id}</p></div>
          <StatusBadge status={currentBooking.status}/>
        </div>
        <div className="grid gap-6 p-5 md:grid-cols-[1fr_auto] md:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            <div><p className="text-xs text-gray-400">Procurement centre</p><p className="mt-1 font-bold">{currentBooking.centre}</p><p className="text-sm text-gray-500">{currentBooking.address}</p></div>
            <div><p className="text-xs text-gray-400">Produce</p><p className="mt-1 font-bold">{currentBooking.crop} · {currentBooking.quantity} {currentBooking.unit}</p></div>
            <div><p className="text-xs text-gray-400">Assigned queue</p><p className="mt-1 font-bold">{currentBooking.queue}</p></div>
            <div><p className="text-xs text-gray-400">Current position</p><p className="mt-1 font-bold">#{currentBooking.position}</p></div>
          </div>
          <Link to="/farmer/confirmation" className="btn btn-primary">View booking <ChevronRight size={17}/></Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link to="/farmer/centres" className="card flex items-center gap-4 p-5 hover:border-brand-200"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800"><Plus/></span><div><h3 className="font-bold">Create new booking</h3><p className="mt-1 text-sm text-gray-500">Choose a centre and time slot.</p></div></Link>
        <Link to="/farmer/queue" className="card flex items-center gap-4 p-5 hover:border-brand-200"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800"><ListOrdered/></span><div><h3 className="font-bold">Track live queue</h3><p className="mt-1 text-sm text-gray-500">See your current position.</p></div></Link>
      </div>
    </div>
  );
}