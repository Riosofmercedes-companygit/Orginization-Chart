import OrgChart from "./components/OrgChart";
import { useState } from "react";
/* Next we are creating a dummy database/file that we are creating by hand. */
import { employees } from "./data/employees";

function App() {

  function handleSelect(employee) {
    setSelectedEmployee(employee);
  }

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div>
      <h1>Organization Chart</h1>
      <OrgChart employee={employees} onSelect={handleSelect} />

      {selectedEmployee && (
        <div className="modal" onClick={() => setSelectedEmployee(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">

              <div className="modal-photo">
                {selectedEmployee.image ? (
                  <img src={selectedEmployee.image} alt={selectedEmployee.name} />
                ) : (
                  <span>No Photo</span>
                )}
              </div>

              <h2>{selectedEmployee.name}</h2>
              <p><strong>Title:</strong> {selectedEmployee.title}</p>
              <p><strong>Department:</strong> {selectedEmployee.department}</p>
              <p><strong>Level:</strong> {selectedEmployee.level}</p>
              <p><strong>Category:</strong> {selectedEmployee.category}</p>
              <p><strong>Location:</strong> {selectedEmployee.location}</p>
              <p><strong>Email:</strong> {selectedEmployee.email || "Not listed"}</p>
              <p><strong>Phone:</strong> {selectedEmployee.phone || "Not listed"}</p>
              <p><strong>Direct Reports:</strong> {selectedEmployee.children.length}</p>
            </div>

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