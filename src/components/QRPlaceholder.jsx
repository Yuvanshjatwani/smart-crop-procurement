import { QrCode } from "lucide-react";

export default function QRPlaceholder() {
  return (
    <div className="flex h-44 w-44 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
      <QrCode size={74} className="text-gray-500" />
      <span className="mt-2 text-xs font-semibold text-gray-500">QR placeholder</span>
    </div>
  );
}