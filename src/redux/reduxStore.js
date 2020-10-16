import { createStore, combineReducers } from "redux";
import contentReducer from "./contentReducer";
import headerReducer from "./headerReducer";
import footerReducer from "./footerReducer";
import loginReducer from "./loginReducer";

let reducers = combineReducers({
    header: headerReducer,
    content: contentReducer,
    footer: footerReducer,
    login: loginReducer
});

const store = createStore(reducers);

window.store = store;

export default store;