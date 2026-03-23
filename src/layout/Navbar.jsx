import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px", background: "black", color: "white" }}>
      <div>WELLCOM LAB</div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/publications">Publication</Link>
        <Link to="/members">Members</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}