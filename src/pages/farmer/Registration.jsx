import { ArrowLeft, Crosshair, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/ui/Button";
import Field from "../../components/ui/Field";
import ProgressSteps from "../../components/ProgressSteps";

export default function Registration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  return (
    <div className="mx-auto max-w-3xl">
      <Link to="/" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500"><ArrowLeft size={16}/> Back to home</Link>
      <ProgressSteps current={1} steps={["Registration", "Centre", "Slot", "Produce", "Confirm"]} />
      <div className="card p-6 sm:p-8">
        <div className="border-b pb-5"><h1 className="text-2xl font-black">Create farmer account</h1><p className="mt-1 text-sm text-gray-500">Enter your basic details. This prototype does not perform Aadhaar verification.</p></div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Full name" required placeholder="e.g. Rajesh Kumar" value={form.name || ""} onChange={set("name")} />
          <Field label="Phone number" required placeholder="10-digit mobile number" value={form.phone || ""} onChange={set("phone")} />
          <Field label="Aadhaar number" hint="UI placeholder only — no verification or storage." placeholder="XXXX XXXX XXXX" />
          <div className="sm:col-span-2"><Field label="Address" required placeholder="Village / street / house" /></div>
          <label className="block space-y-1.5"><span className="text-sm font-semibold text-gray-700">State <span className="text-red-600">*</span></span><select className="field"><option>Haryana</option><option>Punjab</option><option>Uttar Pradesh</option><option>Rajasthan</option></select></label>
          <label className="block space-y-1.5"><span className="text-sm font-semibold text-gray-700">District <span className="text-red-600">*</span></span><select className="field"><option>Karnal</option><option>Panipat</option><option>Kurukshetra</option><option>Ambala</option></select></label>
        </div>
        <button type="button" className="btn btn-secondary mt-5 w-full sm:w-auto"><Crosshair size={17}/> Use my location <span className="text-xs opacity-60">(placeholder)</span></button>
        <div className="mt-7 flex justify-end"><Button onClick={() => navigate("/farmer/centres")}><MapPin size={17}/> Continue to centres</Button></div>
      </div>
    </div>
  );
}