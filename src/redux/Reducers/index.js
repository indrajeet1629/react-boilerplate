import { combineReducers } from "redux";
import Profile from "./profile.reducer";
const reducers = combineReducers({
  profile: Profile,
});

export default reducers;
