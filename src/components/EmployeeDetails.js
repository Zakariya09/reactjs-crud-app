import { Fragment, useState } from "react";
import Table from "../UI/Table";
import TableBody from "../UI/TableBody";
import classes from "./EmployeeDetails.module.css";
import Modal from "../UI/Modal";
import DeleteModal from "../UI/DeleteModal";

const EmployeeDetails = (props) => {
  const [employees, setEmployees] = useState(props.employees);
  const [isHidden, setIsHidden] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [Id, setId] = useState("");
  const [removeUserId, setRemoveUserId] = useState("");
  const noDataFound = (
    <h1 className="text-center text-danger"> No Data Found!</h1>
  );
  const showModalHandler = () => {
    setName("");
    setAddress("");
    setIsHidden(!isHidden);
    setIsEdit(false);
  };

  const showWarningHandler = () => {
    setShowWarning(false);
  };

  const employeeEditHnadler = (employee) => {
    setName(employee.name);
    setAddress(employee.address);
    setId(employee.id);
    setIsEdit(true);
    setIsHidden(false);
  };

  const employeeDeleteHandler = (employee) => {
    setShowWarning(true);
    setRemoveUserId(employee.id);
  };

  const confirmDeleteHandler = () => {
    let newArr = employees.filter((item) => item.id !== removeUserId);
    setEmployees(newArr);
    setShowWarning(false);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const employeeFormHandler = (event) => {
    event.preventDefault();
    if (!isEdit) {
      const employee = {
        id: Math.random().toString("32"),
        name: name,
        address: address,
      };
      setEmployees((prevEmployees) => {
        return [employee, ...prevEmployees];
      });
    } else {
      employees.map((employee) => {
        if (employee.id === Id) {
          employee.name = name;
          employee.address = address;
        }
      });
    }
    setIsHidden(true);
  };
  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-end">
        <button
          className={`btn btn-sm btn-primary ${classes["align-btn"]}`}
          onClick={showModalHandler}
        >
          <i className="fas fa-plus"></i> Add Employee
        </button>
      </div>
      {employees.length && (
        <Table>
          <TableBody
            employees={employees}
            onEdit={employeeEditHnadler}
            onDelete={employeeDeleteHandler}
          />
        </Table>
      )}
      {!employees.length && noDataFound}

      {!isHidden && (
        <Modal>
          <form onSubmit={employeeFormHandler}>
            <div>
              <h3>{isEdit ? "Edit" : "Add"} Employee Details</h3>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-2">
                <label htmlFor="name" className={classes.label}>
                  Name :{" "}
                </label>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={nameChangeHandler}
                  />
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2">
                <label htmlFor="address" className={classes.label}>
                  Address :
                </label>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={addressChangeHandler}
                    cols="30"
                    rows="2"
                  ></textarea>
                  {/* <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={addressChangeHandler}
                  /> */}
                </div>
              </div>
            </div>
            <hr />
            <div
              className={`${classes["modal-actions"]}  d-flex flex-row justify-content-end`}
            >
              <button
                className={`${classes["modal-action-btn"]} btn btn-sm btn-success`}
                type="submit"
              >
                <i className="fas fa-save"></i> Save
              </button>
              <button
                className={`${classes["modal-action-btn"]} btn btn-sm btn-danger`}
                onClick={showModalHandler}
                type="button"
              >
                <i className="fas fa-times"></i> Close
              </button>
            </div>
          </form>
        </Modal>
      )}

      {showWarning && (
        <DeleteModal
          onDelete={confirmDeleteHandler}
          onShowModal={showWarningHandler}
        />
      )}
    </Fragment>
  );
};

export default EmployeeDetails;
