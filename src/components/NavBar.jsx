import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "2rem",
        padding: "1.5rem 2.5rem",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        alignItems: "center"
      }}
    >
      <span style={{ fontWeight: 500, opacity: 0.7 }}>
        pause.
      </span>

      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#000" : "#777",
          fontWeight: isActive ? 500 : 400
        })}
      >
        Explore
      </NavLink>

      <NavLink
        to="/reflect"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#000" : "#777",
          fontWeight: isActive ? 500 : 400
        })}
      >
        Reflect
      </NavLink>

      <NavLink
        to="/calendar"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#000" : "#777",
          fontWeight: isActive ? 500 : 400
        })}
      >
        Calendar
      </NavLink>

      
    </nav>
  );
}
