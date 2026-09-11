export default function ProgressSteps({ current = 1, steps }) {
  return (
    <div className="mb-7 hidden items-center gap-2 sm:flex">
      {steps.map((step, index) => {
        const n = index + 1;
        return (
          <div key={step} className="flex flex-1 items-center gap-2">
            <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${n <= current ? "bg-brand-800 text-white" : "bg-gray-100 text-gray-500"}`}>
              {n}
            </div>
            <span className={`text-xs font-semibold ${n <= current ? "text-brand-900" : "text-gray-400"}`}>{step}</span>
            {index < steps.length - 1 && <div className={`h-px flex-1 ${n < current ? "bg-brand-700" : "bg-gray-200"}`} />}
          </div>
        );
      })}
    </div>
  );
}