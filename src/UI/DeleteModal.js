import { Fragment } from "react";
import Modal from "./Modal";
import classes from "./DeleteModal.module.css";

const DeleteModal = (props) => {
  return (
    <Fragment>
      <Modal>
        <div className="row d-flex flex-column align-items-center">
          <h2 className={classes["warning-text"]}>
            Are you sure wants to delete?
          </h2>

          <div>
            <i className={`fas fa-trash text-danger ${classes.animate}`}> </i>{" "}
          </div>
          <h5>You will no longer able recover it! </h5>
        </div>
        <hr />
        <div
          className={`${classes["modal-actions"]}  d-flex flex-row justify-content-center`}
        >
          <button
            className={`${classes["modal-action-btn"]} btn btn-sm btn-primary`}
            type="submit"
            onClick={props.onDelete}
          >
            <i className="fas fa-trash"></i> Yes Delete it!
          </button>
          <button
            className={`${classes["modal-action-btn"]} btn btn-sm btn-danger`}
            onClick={props.onShowModal}
            type="button"
          >
            <i className="fas fa-times"></i> Cancel
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default DeleteModal;
