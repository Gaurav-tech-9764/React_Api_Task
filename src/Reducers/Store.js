import {createStore} from "redux"
import thunk from "redux-thunk"
import UsersReducers from "./UsersReducers"




let Store = createStore(UsersReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default Store