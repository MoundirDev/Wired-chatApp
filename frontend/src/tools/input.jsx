export default function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div style={{ width: "100%", maxWidth: "260px" }}>
      <label
        htmlFor={label}
        style={{
          display: "block",
          color: "#dce3ff",
          fontSize: "20px",
          marginBottom: "4px",
          marginLeft: "-35px",
        }}>
        {label}
      </label>

      <input
        value={value}
        onChange={onChange}
        type={type}
        id={label}
        placeholder={placeholder}
        required
        style={{
          marginLeft: "-35px",
          padding: "20px 60px",
          marginBottom: "14px",
          border: "none",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.9)",
          fontSize: "20px",
          textAlign: "center",
          outline: "none",
          color: "#1c2a63",
        }}
      />
    </div>
  );
}
