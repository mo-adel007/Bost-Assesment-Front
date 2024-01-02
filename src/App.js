import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Navbar from "./layout/navbar/Navbar";
import { getShipmentDetails } from "./redux/actions/shipmentProcessing";
import SpecificShipment from "./components/specificShipment/SpecificShipment";
import ShipmentDetails from "./components/shipmentDetails/ShipmentDetails";
import LoadingScreen from "./layout/loadingScreen/LoadingScreen";
import "@fontsource/cairo";
import "@fontsource/cairo/500.css";
import "./App.css";

function mapStateToProps(state) {
  return {
    getLoadingScreen: state.getLoadingScreen,
    getShipmentDetailsData: state.getShipmentDetailsData,
  };
}

function App({ getLoadingScreen, getShipmentDetailsData, getShipmentDetails }) {
  const shipmentNumber = "7234258";

  useEffect(() => {
    getShipmentDetails(shipmentNumber);
  }, [getShipmentDetails, shipmentNumber]);
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <React.StrictMode>
      <div className="App" dir={language === "ar" ? "rtl" : "ltr"}>
        <Navbar />
        {getLoadingScreen ? (
          <LoadingScreen />
        ) : (
          <>
            <SpecificShipment getShipmentDetailsData={getShipmentDetailsData} />
            <ShipmentDetails getShipmentDetailsData={getShipmentDetailsData} />
          </>
        )}
      </div>
    </React.StrictMode>
  );
}

export default connect(mapStateToProps, { getShipmentDetails })(App);
