import { Sprout } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-brand-900">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-800 text-white">
        <Sprout size={21} />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-extrabold">Smart Crop</span>
          <span className="block text-xs text-gray-500">Procurement System</span>
        </span>
      )}
    </Link>
  );
}