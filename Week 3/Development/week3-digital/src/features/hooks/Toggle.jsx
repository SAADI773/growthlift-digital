const Toggle = ({ label, isOn, onToggle }) => {
  return (
    <div className="toggle-row">
      <span>{label}</span>
      <button className={`switch ${isOn ? "on" : "off"}`} onClick={onToggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Toggle;