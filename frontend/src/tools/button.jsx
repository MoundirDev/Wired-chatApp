import { useState } from "react";

export default function Btt({ name, goal, disabled }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type={goal}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: disabled
          ? "#999"
          : "linear-gradient(100deg, rgba(30, 91, 255, 0.95), rgba(81, 140, 141, 0.9))",
        color: "white",
        border: "none",
        padding: "10px 50px",
        borderRadius: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "auto",
        transform: hover && !disabled ? "scale(1.03)" : "scale(1)",
        transition: "0.2s",
        opacity: disabled ? 0.6 : 1,
      }}>
      {name}
    </button>
  );
}
