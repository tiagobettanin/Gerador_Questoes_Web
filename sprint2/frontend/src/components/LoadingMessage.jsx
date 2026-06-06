export default function LoadingMessage({ children }) {
  return (
    <div className="rounded-md border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700">
      {children}
    </div>
  );
}
