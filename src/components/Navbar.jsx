import { NavLink } from "react-router-dom";

const links = [
  { label: "About", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Blogs", to: "/blogs" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 h-13 bg-white/90 backdrop-blur border-b border-gray-200">
      <NavLink to="/" className="font-bold text-sm tracking-tight text-gray-900 hover:text-blue-600">
        PM
      </NavLink>
      <ul className="flex gap-1 list-none">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm px-3 py-1.5 rounded transition-colors ${
                  isActive
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
