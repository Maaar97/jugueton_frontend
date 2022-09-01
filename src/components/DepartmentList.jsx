import { DepartmentItem } from "../components";

const DepartmentList = (props) => {
  return (
    <div className="departments-section">
      <h2>Navega por departamento</h2>
      <div className="department-list">
        {
          props.departments.map((department, index) => {
            return <DepartmentItem
            key={'department-' + (index+1)}
            name={department.name}
            image={department.image} 
            link={department.link}/>
          })
        }
      </div>
    </div>
  );
}

export default DepartmentList;