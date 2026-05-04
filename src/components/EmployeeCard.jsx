import "./EmployeeCard.css";

function EmployeeCard({ employee, onSelect }) {
  return (
    <div className="employee-card" onClick={() => onSelect(employee)}>
      <h3>{employee.name}</h3>
      <p>{employee.title}</p>
      <p>{employee.department}</p>
    </div>
  );
}

export default EmployeeCard;