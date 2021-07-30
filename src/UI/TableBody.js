import { Fragment } from "react";
import TableHead from "./TableHead";

const TABLE_HEADERS = ["Id", "Name", "Address", "Action"];

const TableBody = (props) => {
  const employees = props.employees;

  const editHandler = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    props.onEdit(employee);
  };

  const deleteHandler = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    props.onDelete(employee);
   
  };

  return (
    <Fragment>
      <tbody>
        <TableHead headers={TABLE_HEADERS} />
        {employees.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>
                <i
                  className="fa fa-edit text-success cursor"
                  onClick={editHandler.bind(null, employee.id)}
                ></i>
                &nbsp;
                <i
                  className="fa fa-trash text-danger cursor"
                  onClick={deleteHandler.bind(null, employee.id)}
                ></i>
                &nbsp;
              </td>
            </tr>
          );
        })}
      </tbody>
    </Fragment>
  );
};

export default TableBody;
