const Toggle = ({ label, isOn, onToggle }) => {
  return (
    <section className="toggle">
      <span>{label}</span>
      <button className={`switch ${isOn ? "on" : "off"}`} onClick={onToggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </section>
  );
};

export default Toggle;