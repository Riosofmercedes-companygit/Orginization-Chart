import EmployeeCard from "./EmployeeCard";
import "./OrgChart.css";

function OrgChart({ employee, onSelect }) {
  return (
    <div className="org-node">
      <EmployeeCard employee={employee} onSelect={onSelect} />

      {employee.children.length > 0 && (
        <div className="org-children-wrapper">
          <div className="org-line"></div>
          <div className="org-horizontal-line"></div>

          <div className="org-children">
            {employee.children.map((child, index) => (
              <div className="org-child-wrapper" key={index}>
                <div className="org-child-line"></div>
                <OrgChart employee={child} onSelect={onSelect} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrgChart;