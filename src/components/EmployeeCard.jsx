import "./EmployeeCard.css";

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>{employee.title}</p>
      <p>{employee.department}</p>
    </div>
  );
}

export default EmployeeCard;