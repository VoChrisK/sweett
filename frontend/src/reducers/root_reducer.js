import { combineReducers } from "redux";
import session from "./session_api_reducer";
import ui from './ui_reducer';
import errors from "./errors_reducer"
import entities from "./entities_reducer";
import record from './record_reducer';
import tasks from './tasks_reducer'

const RootReducer = combineReducers({
  entities,
  session,
  ui,
  errors,
  record
});

export default RootReducer;
