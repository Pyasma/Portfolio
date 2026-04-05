import { NavLink } from "react-router-dom";

const links = [
  { label: "About", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-1.5 bg-white/95 backdrop-blur border border-gray-200 rounded-full shadow-sm whitespace-nowrap animate-fade">
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.to === "/"}
          className={({ isActive }) =>
            `text-sm px-3.5 py-1 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-gray-900 text-white font-medium"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            }`
          }
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}
