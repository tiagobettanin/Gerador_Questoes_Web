export default function ErrorMessage({ children }) {
  return (
    <div className="rounded-md border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
      {children}
    </div>
  );
}
