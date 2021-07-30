import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import Login from "./pages/Login";
const DUMMY_DATA = [
  { id: 1, name: "Zakariya Khan", address: "Serve no. 15/3b/1, ganeshpuri" },
  {
    id: 2,
    name: "Raza Altaf Ahemad Shaikh",
    address: "New Sahara Motors, Near  Jatra Hotels",
  },
];

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
        <Redirect to="/login"></Redirect>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/addEmployee">
          <EmployeeDetails employees={DUMMY_DATA}></EmployeeDetails>;
        </Route>
        <Route path="**">
          <Login />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
