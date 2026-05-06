import OrgChart from "./components/OrgChart";
import { useState } from "react";
import { employees } from "./data/employees";
import Navbar from "./components/Navbar";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleSelect(employee) {
    setSelectedEmployee(employee);
  }

  return (
    <div className="app">

      <Navbar />

      <header className="app-header">
        <div>

          <h1>Organization Chart</h1>

          <p className="app-subtitle">
            Company leadership and department structure
          </p>
        </div>
      </header>

      <main className="chart-panel">
        <OrgChart
          employee={employees}
          onSelect={handleSelect}
          startExpanded={true}
        />
      </main>

      {selectedEmployee && (
        <div
          className="modal"
          onClick={() => setSelectedEmployee(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-body">
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

              <h2>{selectedEmployee.name}</h2>

              <p>
                <strong>Title:</strong> {selectedEmployee.title}
              </p>

              <p>
                <strong>Department:</strong> {selectedEmployee.department}
              </p>

              <p>
                <strong>Level:</strong> {selectedEmployee.level}
              </p>

              <p>
                <strong>Category:</strong> {selectedEmployee.category}
              </p>

              <p>
                <strong>Location:</strong> {selectedEmployee.location}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {selectedEmployee.email || "Not listed"}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {selectedEmployee.phone || "Not listed"}
              </p>

              <p>
                <strong>Direct Reports:</strong>{" "}
                {selectedEmployee.children.length}
              </p>
            </div>

            <button
              onClick={() => setSelectedEmployee(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;