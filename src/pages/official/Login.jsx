import { ArrowLeft, LockKeyhole } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import Field from "../../components/ui/Field";
import Button from "../../components/ui/Button";

export default function OfficialLogin() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-md py-8 sm:py-14">
      <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500"><ArrowLeft size={16}/> Back to home</Link>
      <div className="mb-7"><Logo /></div>
      <div className="card p-6 sm:p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800"><LockKeyhole/></span>
        <h1 className="mt-5 text-2xl font-black">Official Login</h1>
        <p className="mt-2 text-sm leading-6 text-gray-500">Access the procurement centre operations portal.</p>
        <div className="mt-6 space-y-5"><Field label="Official ID" placeholder="Enter official ID"/><Field label="Password" type="password" placeholder="Prototype placeholder"/><Button className="w-full" onClick={() => navigate("/official/dashboard")}>Sign in</Button></div>
        <p className="mt-5 text-xs text-gray-400">Authentication is UI-only in this prototype.</p>
      </div>
    </div>
  );
}