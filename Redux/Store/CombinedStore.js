import { createStore, combineReducers } from "redux";
import { MainReducer } from "../Reducers/MainReducer";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToDoReducer } from "../Reducers/ToDoReducer";

const persistConfig_incre = {
    key:'Increment',
    storage: AsyncStorage,
    whitelist:[],
    blacklist:[]
  }

  const persistConfig_toDo = {
    key:'ToDoList',
    storage: AsyncStorage,
    whitelist:['stateValue'],
    blacklist:[]
  }


const rootReducer = combineReducers({
    // ButtonAction: MainReducer        // for reduecer things
    //ToDoAction: ToDoReducer
    ButtonAction: persistReducer(persistConfig_incre,MainReducer),
    ToDoAction: persistReducer(persistConfig_toDo,ToDoReducer)

})
export const store = createStore(rootReducer);
export const persistor = persistStore(store);