import colors from "../styles/colors";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "20px",
        background: colors.black,
        color: colors.white,
      }}
    >
      <p>© WellcomLab</p>
    </footer>
  );
}