import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { useState } from "react";
import Logo from "../../components/Logo";
import Button from "../../components/ui/Button";
import Field from "../../components/ui/Field";

export default function FarmerLogin() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  return (
    <div className="mx-auto max-w-md py-8 sm:py-14">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500"><ArrowLeft size={16}/> Back to home</Link>
      <div className="mb-7"><Logo /></div>
      <div className="card p-6 sm:p-8">
        <h1 className="text-2xl font-black text-gray-900">Farmer Login</h1>
        <p className="mt-2 text-sm leading-6 text-gray-500">Use your registered mobile number to access your bookings.</p>
        <div className="mt-6 space-y-5">
          <Field label="Phone number" placeholder="Enter 10-digit mobile number" value={phone} onChange={e => setPhone(e.target.value)} />
          <Field label="Password / OTP" placeholder="Prototype placeholder" type="text" />
          <Button className="w-full" onClick={() => navigate("/farmer/dashboard")}><Phone size={17}/> Continue</Button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">New farmer? <Link to="/farmer/register" className="font-bold text-brand-800">Register here</Link></p>
      </div>
    </div>
  );
}