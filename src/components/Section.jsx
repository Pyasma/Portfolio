export default function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-400 pb-2 mb-5 border-b border-gray-100">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-900 inline-block shrink-0" />
        {title}
      </h2>
      {children}
    </section>
  );
}
