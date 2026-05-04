import OrgChart from "./components/OrgChart";

/* Next we are creating a dummy database/file that we are creating by hand. */
import { employees } from "./data/employees";

function App() {
  return (
    <div>
      <h1>Organization Chart</h1>
      <OrgChart employee={employees}/>
    </div>
  );
}

export default App;