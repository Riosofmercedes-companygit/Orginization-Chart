import "./EmployeeCard.css";

/*
EmployeeCard is responsible for displaying ONE employee's basic info.

It does NOT:

* manage hierarchy
* manage state
* control layout

It ONLY:

* displays data
* sends click events upward
  */
function EmployeeCard({ employee, onSelect, hasChildren, isExpanded, onToggle }) {

  return (
    <>

      <div
        className="employee-card"
        onClick={() => onSelect(employee)}
      >

        {/* Employee name (primary identifier) */}
        <h3>{employee.name}</h3>

        {/* Job title (role in company) */}
        <p>{employee.title}</p>

        {/* Department (matches Entra / organizational grouping) */}
        <p>{employee.department}</p>

      </div>

      {hasChildren && (
        <div
          className="employee-toggle"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isExpanded ? "-" : "+"}
        </div>
      )}
    </>
  );
}

export default EmployeeCard;
