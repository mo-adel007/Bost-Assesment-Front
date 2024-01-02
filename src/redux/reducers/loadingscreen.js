import {IS_LOADING} from "../actionTypes/ActionTypes"
export default function loadingScreen(state = false, action) {
    switch (action.type) {
        case IS_LOADING:{
            return action.payload 
          }
        default:
            return state;
    }
}