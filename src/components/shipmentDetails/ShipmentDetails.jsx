import React, { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./ShipmentDetails.module.css";
import alarmImg from "../../images/alarmImg.jpg";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    getShipmentDetailsData: state.getShipmentDetailsData,
  };
}

function ShipmentDetails(props) {
  const { t, i18n } = useTranslation();
  let { getShipmentDetailsData } = props;

  return (
    <Fragment>
      {/* Build the UI completely responsive and use UI assets similar to the ones inside these images. */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 p-5">
            <p>{t("Shipment Details")}</p>
            <div className={style.parentDivTable}>
              <table className={style.headTableStyle}>
                <thead>
                  <tr className={style.trHeadTableStyle}>
                    <th className={style.thHead} scope="col">
                      {t("Branch")}
                    </th>
                    <th className={style.thHead} scope="col">
                      {t("Date")}
                    </th>
                    <th className={style.thHead} scope="col">
                      {t("Time")}
                    </th>
                    <th className={style.thHead} scope="col">
                      {t("Details")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getShipmentDetailsData?.TransitEvents?.map((item, key) => {
                    const date = new Date(item?.timestamp);
                    return (
                      <tr className={style.trTableStyle} key={key}>
                        <th className={style.thHead} scope="row">
                          {" "}
                          {item?.hub ? t(item?.hub) : t("Nasr City")}
                        </th>
                        <td>
                          {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
                        </td>
                        <td>
                          {date.getHours() == 12 || date.getHours() == 0
                            ? 12
                            : date.getHours() % 12}
                          :{date.getMinutes()}
                          {date.getHours() > 11 ? "PM" : "AM"}
                        </td>
                        <td>
                          <p>{t(item?.state)}</p>
                          <p className={style.reasonStyle}>{t(item?.reason)}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-4 p-5">
            <p>{t("Delivery Address")}</p>
            <div className={style.displayAddress}>
              {t("details_delivery_address")}
            </div>
            <div className={style.displayAddress}>
              <div>
                <img
                  src={alarmImg}
                  className={style.alarmImg}
                  alt="Alarm Image"
                />
              </div>
              <div>
                <p> {t("shipments_issue_question")}</p>
                <button className="btn btn-danger">
                  {t("Report_problem")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default connect(mapStateToProps)(ShipmentDetails);
