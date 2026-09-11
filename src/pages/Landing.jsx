import { ArrowRight, CheckCircle2, Clock3, Leaf, ListOrdered, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#f7faf7]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <Link to="/official/login" className="text-sm font-semibold text-gray-600 hover:text-brand-800">Official Login</Link>
        </div>
      </header>

      <main>
        <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-[#f7faf7]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-24">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-bold text-brand-800">
                <Leaf size={14} /> Digital procurement for farmers
              </span>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Smarter crop procurement. <span className="text-brand-800">Less waiting.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Book a procurement slot, receive your queue position, and track your visit from one simple platform.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/farmer/register" className="btn btn-primary"><span>Farmer Registration</span><ArrowRight size={18}/></Link>
                <Link to="/farmer/login" className="btn btn-outline">Farmer Login</Link>
              </div>
            </div>

            <div className="card p-5 sm:p-7">
              <p className="text-sm font-bold text-gray-500">How it works</p>
              <div className="mt-5 space-y-5">
                {[
                  ["01", "Choose a centre", "Find a nearby procurement centre and view available slots."],
                  ["02", "Book your slot", "Add your produce details and confirm your visit."],
                  ["03", "Follow your queue", "Use your booking ID to keep track of your position."],
                ].map(([n, title, text]) => (
                  <div key={n} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-xs font-black text-white">{n}</span>
                    <div><h3 className="font-bold text-gray-900">{title}</h3><p className="mt-1 text-sm leading-6 text-gray-500">{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [Clock3, "Scheduled visits", "Reduce uncertainty with clear time slots."],
              [ListOrdered, "Queue visibility", "Know where you stand before your turn."],
              [ShieldCheck, "Simple verification", "Officials can quickly verify bookings."],
            ].map(([Icon, title, text]) => (
              <div className="card p-5" key={title}><Icon className="text-brand-800" size={22}/><h3 className="mt-4 font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-gray-500">{text}</p></div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 size={17} className="text-brand-700"/> Prototype foundation — live integrations will be connected later.</div>
        </section>
      </main>
    </div>
  );
}