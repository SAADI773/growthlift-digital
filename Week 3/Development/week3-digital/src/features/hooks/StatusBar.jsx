const StatusBar = ({ count, threshold }) => {
  const status =
    count > threshold ? "Above threshold" : count === threshold ? "At threshold" : "Below threshold";

  return (
    <p className="status">
      Status: <strong>{status}</strong>
    </p>
  );
};

export default StatusBar;