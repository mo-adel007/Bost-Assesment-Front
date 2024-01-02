import { combineReducers } from "redux";
import shipmentProcessing from "./certainShipmentData"
import  loadingScreen  from './loadingscreen';
export default combineReducers({
    getShipmentDetailsData: shipmentProcessing,
    getLoadingScreen: loadingScreen ,

});