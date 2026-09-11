const features = [
  "JSX expressions with curly braces",
  "Conditional rendering",
  "Component props",
  "Separate .jsx component files",
];

const FeatureList = () => {
  return (
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  );
};

export default FeatureList;