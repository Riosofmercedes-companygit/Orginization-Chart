import EmployeeCard from "./EmployeeCard";
import "./OrgChart.css";
import { useState } from "react";

/*
OrgChart is a recursive component.
It renders ONE employee and then calls itself for each direct report.
*/
function OrgChart({ employee, onSelect, startExpanded = false }) {

  const [isExpanded, setIsExpanded] = useState(startExpanded);

  return (<div className="org-node">

    <EmployeeCard
      employee={employee}
      onSelect={onSelect}
      hasChildren={employee.children.length > 0}
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    />

    {employee.children.length > 0 && isExpanded && (

      <div className="org-children-wrapper">

        <div className="org-line"></div>

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
