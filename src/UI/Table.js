import { Fragment } from "react";
import classes from "./Table.module.css";

const Table = (props) => {
  return (
    <Fragment>
      <section className={classes["table-container"]}>
        <table className="table table-bordered table-stripped table-dark">
          {props.children}
        </table>
      </section>
    </Fragment>
  );
};

export default Table;
