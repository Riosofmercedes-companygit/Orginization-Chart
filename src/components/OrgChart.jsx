import EmployeeCard from "./EmployeeCard";
import "./OrgChart.css";
import { useState } from "react";

/*
OrgChart is a recursive component.
It renders ONE employee and then calls itself for each direct report.
*/
function OrgChart({ employee, onSelect }) {

  /*
  isExpanded - whether or not this employee's direct reports are showing
  setIsExpanded - changes the value of isExpanded
  true - children visible by default
  */
  const [isExpanded, setIsExpanded] = useState(true);

  return (<div className="org-node">

    {/* 
  Render the current employee as a card.
  onSelect is passed down so clicks can bubble up to App.jsx
  */}
    <EmployeeCard
      employee={employee}
      onSelect={onSelect}
      hasChildren={employee.children.length > 0}
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    />

    {/* 
  Only render children section IF this employee has direct reports.
  Prevents empty spacing for employees with no reports.
  */}
    {employee.children.length > 0 && isExpanded && (

      /*
      Wrapper that holds:
      - vertical line from parent
      - horizontal connector line
      - row of child employees
      */
      <div className="org-children-wrapper">

        {/* Vertical line from current employee down */}
        <div className="org-line"></div>

        {/* Container for all direct reports (displayed in a row) */}
        <div className="org-children">

          {/* 
        Loop through each direct report (child).
        For each child:
        - create a wrapper
        - draw a vertical connector line
        - recursively render that employee
        */}
          {employee.children.map((child, index) => (

            <div className="org-child-wrapper" key={index}>

              {/* Vertical line from horizontal bar down to child */}
              <div className="org-child-line"></div>

              {/* 
            Recursive call:
            This renders the child's own card + THEIR children.
            This is what builds the entire tree structure.
            */}
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
