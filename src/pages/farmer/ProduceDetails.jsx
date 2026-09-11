import { ArrowLeft, ArrowRight, Package } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Field from "../../components/ui/Field";
import Button from "../../components/ui/Button";
import ProgressSteps from "../../components/ProgressSteps";

export default function ProduceDetails() {
  const navigate = useNavigate();
  const [crop, setCrop] = useState("Wheat");
  return (
    <div className="mx-auto max-w-3xl">
      <Link to="/farmer/slots" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-500"><ArrowLeft size={16}/> Change slot</Link>
      <ProgressSteps current={4} steps={["Registration", "Centre", "Slot", "Produce", "Confirm"]} />
      <div className="card p-6 sm:p-8">
        <div className="flex items-start gap-4 border-b pb-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800"><Package/></span><div><h1 className="text-2xl font-black">Produce details</h1><p className="mt-1 text-sm text-gray-500">Tell us what you will bring to the centre.</p></div></div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="block space-y-1.5"><span className="text-sm font-semibold text-gray-700">Crop name <span className="text-red-600">*</span></span><select className="field" value={crop} onChange={e => setCrop(e.target.value)}><option>Wheat</option><option>Rice</option><option>Mustard</option><option>Maize</option><option>Barley</option></select></label>
          <Field label="Quantity" required type="number" placeholder="e.g. 42" />
          <label className="block space-y-1.5"><span className="text-sm font-semibold text-gray-700">Unit <span className="text-red-600">*</span></span><select className="field"><option>Quintal</option><option>Kg</option><option>Tonnes</option></select></label>
          <label className="block space-y-1.5"><span className="text-sm font-semibold text-gray-700">Produce category / type</span><select className="field"><option>Food grain</option><option>Oilseed</option><option>Cereal</option><option>Other</option></select></label>
        </div>
        <div className="mt-7 flex justify-end"><Button onClick={() => navigate("/farmer/confirmation")}>Review booking <ArrowRight size={17}/></Button></div>
      </div>
    </div>
  );
}