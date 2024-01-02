import {IS_LOADING} from "../actionTypes/ActionTypes"


export const setLoading=(isloading)=> {
    return { type: IS_LOADING, isloading };
}