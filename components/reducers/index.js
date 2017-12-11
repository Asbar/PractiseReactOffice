import { combineReducers } from "redux";
import userReducer from "./user";
import ActiveUserReducer from "./activeUser";
const allReducers = combineReducers({
    users: userReducer,
    activeUser:ActiveUserReducer
});

export default allReducers;