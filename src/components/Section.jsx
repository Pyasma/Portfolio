export default function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 border-b border-gray-200 pb-2 mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}
