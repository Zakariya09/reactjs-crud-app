import { Fragment } from "react";

const TableHead = (props) => {
  const headers = props.headers;
  return (
    <Fragment>
      <tr>
        {headers.map((item) => {
          return <th key={item}>{item}</th>;
        })}
      </tr>
    </Fragment>
  );
};

export default TableHead;
