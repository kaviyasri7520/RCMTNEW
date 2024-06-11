import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiTimes } from "react-icons/ti";
const { userInformationAuthorizedUsers } = require("../../config/config.json");

const Sidebar = () => {
  const Location = useLocation();
  const { pathname } = Location;
  const currentLocation = pathname.replace("/", "");
  const [show, hide] = useState(true);
  const [verifiedAuthentication, setVerifiedAuthentication] = useState(false);

  useEffect(() => {
    try {
      const currentUser = atob(localStorage.getItem("userId"));
      const userVerification =
        userInformationAuthorizedUsers.includes(currentUser);
      setVerifiedAuthentication(userVerification);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.getElementsByClassName("sidebar-link")
    );
    const ids = elements.map((element) => element.id);
    Array.isArray(ids) &&
      ids.map((e) => {
        if (e === currentLocation) {
          const id = document.getElementById(currentLocation);
          id.classList.add("active");
        }
        if (e !== currentLocation) {
          const id = document.getElementById(e);
          id.classList.remove("active");
        }
      });
  }, [show, pathname]);

  return (
    <div className="workout-sidebar">
      {show ? (
        <GiHamburgerMenu className="show-sidebar" onClick={() => hide(false)} />
      ) : (
        <nav className="sidebar-lists">
          <li>
            <TiTimes className="hide-sidebar" onClick={() => hide(true)} />
          </li>
          <Link
            id="rewards-track"
            className="sidebar-link"
            to="/rewards-track"
            onClick={() => hide(true)}
          >
            Rewards Track
          </Link>
          <Link
            id="amazon-signup-users"
            className="sidebar-link"
            to="/amazon-signup-users"
            onClick={() => hide(true)}
          >
            Amazon Signup Users
          </Link>
          <Link
            id="referred&referral-users"
            className="sidebar-link"
            to="/referred&referral-users"
            onClick={() => hide(true)}
          >
            Referred & Referral Users
          </Link>
          <Link
            id="mail-tag-correction"
            className="sidebar-link"
            to="/mail-tag-correction"
            onClick={() => hide(true)}
          >
            Mail Tag Correction
          </Link>
          <Link
            id="support-mail"
            className="sidebar-link"
            to="/support-mail"
            onClick={() => hide(true)}
          >
            Support Mail
          </Link>
          <Link
            id="insta-account-verification"
            className="sidebar-link"
            to="/insta-account-verification"
            onClick={() => hide(true)}
          >
            Insta Acc Verification
          </Link>
          <Link
            id="track-purchase"
            className="sidebar-link"
            to="/track-purchase"
            onClick={() => hide(true)}
          >
            Track Purchase
          </Link>
          <Link
            id="task-rewards"
            className="sidebar-link"
            to="/task-rewards"
            onClick={() => hide(true)}
          >
            Task Rewards
          </Link>
          <Link
            id="search&discover"
            className="sidebar-link"
            to="/search&discover"
            onClick={() => hide(true)}
          >
            Search & Discover
          </Link>
          {verifiedAuthentication && (
            <Link
              id="user-information"
              className="sidebar-link"
              to="/user-information"
              onClick={() => hide(true)}
            >
              User Information
            </Link>
          )}
          <Link
            id="deals-view"
            className="sidebar-link"
            to="/deals-view"
            onClick={() => hide(true)}
          >
            Deals View
          </Link>
          <Link
          id="banner&story-image-change"
          className="sidebar-link"
          to="/banner&story-image-change"
          onClick={() => hide(true)}>
          Banner & Daily User Engagement
          </Link>

          <Link
          id="test-users"
          className="sidebar-link"
          to="/test-users"
          onClick={() => hide(true)}>
          Test Users
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
