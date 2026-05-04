/* First Thing we are doing is importing our employee card to ensure it shows on the page. */
import EmployeeCard from "./components/EmployeeCard";

/* Next we are creating a dummy database/file that we are creating by hand. */
import { employees } from "./data/employees";

function App() {
  return (
    <div>
      <h1>Organization Chart</h1>

      {/*Employees will go hear and their data is imported from the database/file we made earlier */}
      <EmployeeCard
        name={employees.name}
        title={employees.title}
      />

      { /* Loop through each employee who reports to the CEO and display a card for each */}
      {employees.children.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.name}
          title={employee.title}
        />
      ))}
    </div>
  );
}

export default App;