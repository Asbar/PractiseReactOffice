import React from "react";
import UserList from "../containers/userList";
import { connect } from "react-redux";
import UserDetail from "../containers/userDetail";
const App = () => (
    <div>
        <h2>User Name List: </h2>
        <UserList/>
        <hr/>
        <h2>User Details : </h2>
        <UserDetail/>
    </div>
);

export default App;