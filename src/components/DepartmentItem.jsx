const DepartmentItem = (props) => {
  return (
    <div className="department-item">
      <a href={ props.link }>
        <img src={ props.image } alt="" className="department-item-img" height="180px" />
      </a>
      <p>{ props.name }</p>
    </div>
  );
}

export default DepartmentItem;