import { CheckCircle2, Copy, Download, ListOrdered, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { currentBooking } from "../../data/bookings";
import ProgressSteps from "../../components/ProgressSteps";
import StatusBadge from "../../components/ui/StatusBadge";
import QRPlaceholder from "../../components/QRPlaceholder";

export default function BookingConfirmation() {
  return (
    <div className="mx-auto max-w-4xl">
      <ProgressSteps current={5} steps={["Registration", "Centre", "Slot", "Produce", "Confirm"]} />
      <div className="mb-6 text-center"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-800"><CheckCircle2 size={30}/></span><h1 className="mt-4 text-3xl font-black">Booking confirmed</h1><p className="mt-1 text-sm text-gray-500">Your procurement visit has been successfully scheduled.</p></div>
      <div className="card overflow-hidden">
        <div className="flex flex-col gap-4 border-b p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-gray-400">Booking ID</p><div className="mt-1 flex items-center gap-2"><span className="text-xl font-black text-brand-900">{currentBooking.id}</span><button className="rounded p-1 text-gray-400 hover:bg-gray-100"><Copy size={15}/></button></div></div><StatusBadge status="Confirmed"/></div>
        <div className="grid gap-8 p-5 sm:p-7 md:grid-cols-[1fr_auto]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2"><p className="text-xs text-gray-400">Procurement centre</p><p className="mt-1 font-bold">{currentBooking.centre}</p><p className="text-sm text-gray-500">{currentBooking.address}</p></div>
            <div><p className="text-xs text-gray-400">Date</p><p className="mt-1 font-bold">{currentBooking.date}</p></div>
            <div><p className="text-xs text-gray-400">Time slot</p><p className="mt-1 font-bold">{currentBooking.slot}</p></div>
            <div><p className="text-xs text-gray-400">Assigned queue</p><p className="mt-1 font-bold">{currentBooking.queue}</p></div>
            <div><p className="text-xs text-gray-400">Produce</p><p className="mt-1 font-bold">{currentBooking.crop} · {currentBooking.quantity} {currentBooking.unit}</p></div>
            <div className="sm:col-span-2 rounded-xl bg-brand-50 p-4"><p className="text-xs font-bold text-brand-700">Queue position</p><p className="mt-1 text-2xl font-black text-brand-900">#{currentBooking.position}</p><p className="text-xs text-brand-700">Approximate position in {currentBooking.queue}</p></div>
          </div>
          <div className="flex flex-col items-center gap-3"><QRPlaceholder/><p className="text-center text-xs text-gray-500">Show this QR at the<br/>procurement centre.</p></div>
        </div>
        <div className="flex flex-col gap-3 border-t bg-gray-50 p-5 sm:flex-row sm:justify-between"><Link to="/farmer/queue" className="btn btn-primary"><ListOrdered size={17}/> Track queue</Link><button className="btn btn-outline"><Download size={17}/> Download receipt</button></div>
      </div>
    </div>
  );
}