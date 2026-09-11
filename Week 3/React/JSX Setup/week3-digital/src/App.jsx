import UserGreeting from "./components/UserGreeting.jsx";
import FeatureList from "./components/FeatureList.jsx";

const user = "GrowthLift";
const isLoggedIn = true;

const App = () => {
  return (
    <div className="container">
      <h1>Week 3 Digital - JSX Setup</h1>
      {isLoggedIn ? (
        <UserGreeting name={user} />
      ) : (
        <UserGreeting name="Guest" />
      )}
      <FeatureList />
    </div>
  );
};

export default App;