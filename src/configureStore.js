import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReduser from "./reducers";

export const middlewares = [ReduxThunk];
const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
export default createStoreWithMiddleWare(rootReduser);