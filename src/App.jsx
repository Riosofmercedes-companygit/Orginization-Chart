import OrgChart from "./components/OrgChart";
import { useState } from "react";

/* Temporary data source (acts like a database for now) */
import { employees } from "./data/employees";

function App() {

  /*
  selectedEmployee = currently clicked employee
  null = no employee selected (no modal shown)
  */
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  /*
  Called when an EmployeeCard is clicked.
  Receives the employee object and stores it in state.
  This triggers the modal to appear.
  */
  function handleSelect(employee) {
    setSelectedEmployee(employee);
  }

  return (<div> <h1>Organization Chart</h1>

    {/* 
  OrgChart renders the full hierarchy.
  We pass:
  - employees (data)
  - handleSelect (so clicks can bubble up to App)
  */}
    <OrgChart employee={employees} onSelect={handleSelect} />

    {/* 
  Modal only renders IF an employee is selected.
  This is conditional rendering.
  */}
    {selectedEmployee && (

      /*
      Modal background (dark overlay)
      Clicking this closes the modal
      */
      <div className="modal" onClick={() => setSelectedEmployee(null)}>

        {/* 
      Modal content box
      stopPropagation prevents clicks inside from closing the modal
      */}
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>

          <div className="modal-body">

            {/* 
          Profile image area
          If image exists → show it
          If not → show placeholder text
          */}
            <div className="modal-photo">
              {selectedEmployee.image ? (
                <img
                  src={selectedEmployee.image}
                  alt={selectedEmployee.name}
                />
              ) : (
                <span>No Photo</span>
              )}
            </div>

            {/* Basic employee info */}
            <h2>{selectedEmployee.name}</h2>

            <p><strong>Title:</strong> {selectedEmployee.title}</p>
            <p><strong>Department:</strong> {selectedEmployee.department}</p>
            <p><strong>Level:</strong> {selectedEmployee.level}</p>
            <p><strong>Category:</strong> {selectedEmployee.category}</p>
            <p><strong>Location:</strong> {selectedEmployee.location}</p>

            {/* Optional fields (fallback if empty) */}
            <p>
              <strong>Email:</strong> {selectedEmployee.email || "Not listed"}
            </p>

            <p>
              <strong>Phone:</strong> {selectedEmployee.phone || "Not listed"}
            </p>

            {/* Derived data (not stored directly) */}
            <p>
              <strong>Direct Reports:</strong> {selectedEmployee.children.length}
            </p>

          </div>

          {/* Manual close button */}
          <button onClick={() => setSelectedEmployee(null)}>
            Close
          </button>

        </div>
      </div>
    )}
  </div>

  );
}

export default App;
