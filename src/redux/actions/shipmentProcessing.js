// Import necessary actions and constants
import { GET_SHIPMENT_DATA, IS_LOADING } from "../actionTypes/ActionTypes";
import axios from "axios";

// Define the action to get shipment details
export const getShipmentDetails = (shipmentNum) => async (dispatch) => {
  dispatch({ type: IS_LOADING, payload: true });

  try {
    // Make API request
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${shipmentNum}`
    );

    // Update store with the response data
    if (response.status === 200) {
      dispatch({ type: GET_SHIPMENT_DATA, payload: response.data });
    }
  } catch (error) {
    console.log("error => ", error);
  } finally {
    dispatch({ type: IS_LOADING, payload: false });
  }
};
