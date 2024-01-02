import React, { Fragment, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import style from "./Navbar.module.css";
import logo from "../../images/logo.JPG";
import { connect } from "react-redux";
import { getShipmentDetails } from "../../redux/actions/shipmentProcessing";
function mapStateToProps(state) {
  return {
    getShipmentDetailsData: state.getShipmentDetailsData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getShipmentDetails: (shipmentNum) =>
      dispatch(getShipmentDetails(shipmentNum)),
  };
}

function Navbar(props) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const textSearch = useRef(null);
  const searchDialog = useRef(null);

  const handleChangeLanguage = (e) => {
    changeLanguage(e.target.value);
  };

  const getSubmittedSearch = (e) => {
    e.preventDefault();
    props.getShipmentDetails(textSearch.current.value);
  };

  const handelDisplaySearchDialog = () => {
    if (searchDialog.current.style.display === "block") {
      searchDialog.current.style.display = "none";
    } else {
      searchDialog.current.style.display = "block";
    }
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
        <div className="container">
          <div className={style.logoDivStyle}>
            <img src={logo} alt="Logo Brand" />
            <a className={style.titleBrand} href="#">
              {" "}
              {t("titleBrand")}
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav  w-50 d-flex justify-content-end">
              <li className={style.navItems}>
                <a className="nav-link " aria-current="page" href="#">
                  {t("homeNavItem")}
                </a>
              </li>
              <li className={style.navItems}>
                <a className="nav-link" href="#">
                  {t("pricesNavItem")}
                </a>
              </li>
              <li className={style.navItems}>
                <a className="nav-link" href="#">
                  {t("callSalesNavItem")}
                </a>
              </li>
            </ul>
            <ul className="navbar-nav w-50 d-flex justify-content-end">
              <li className={style.navItems}>
                <a
                  className="nav-link"
                  onClick={handelDisplaySearchDialog}
                  href="#"
                >
                  {t("shipmentsNavItem")}
                </a>

                <div className={style.searchDialog} ref={searchDialog}>
                  <p>{t("shipmentsNavItem")}</p>
                  <form
                    onSubmit={getSubmittedSearch}
                    className={style.handleDialog}
                  >
                    <input
                      ref={textSearch}
                      className="form-control"
                      type="text"
                      placeholder="Enter number"
                    />
                    <button
                      className={style.searchIcon}
                      onClick={getSubmittedSearch}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faSearchengin} />{" "}
                    </button>
                  </form>
                </div>
              </li>

              <li className={style.navItems}>
                <a className="nav-link" href="#">
                  {t("sginInNavItem")}
                </a>
              </li>
              <li>
                <select
                  onChange={handleChangeLanguage}
                  className={style.changeLanguageBtn}
                >
                  <option className={style.optionLanguageBtn} value="ar">
                    {t("AR")}
                  </option>
                  <option className={style.optionLanguageBtn} value="en">
                    {t("ENG")}
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
