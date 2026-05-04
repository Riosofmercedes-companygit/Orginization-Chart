import EmployeeCard from "./EmployeeCard";
import "./OrgChart.css";

function OrgChart({ employee }) {
  return (
    <div className="org-node">
      <EmployeeCard employee={employee} />

      {employee.children.length > 0 && (
        <div className="org-children-wrapper">
          <div className="org-line"></div>
          <div className="org-horizontal-line"></div>

          <div className="org-children">
            {employee.children.map((child, index) => (
              <OrgChart key={index} employee={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrgChart;