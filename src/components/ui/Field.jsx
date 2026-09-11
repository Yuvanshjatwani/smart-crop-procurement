export default function Field({ label, hint, required = false, ...props }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      <input className="field" {...props} />
      {hint && <span className="block text-xs text-gray-500">{hint}</span>}
    </label>
  );
}