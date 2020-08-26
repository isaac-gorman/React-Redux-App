import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { getProfileData, getShotData } from "../actions/actions";
import { connect } from "react-redux";
import loading from "./loading.gif";

function Profile(props) {
  // const [profileData, setProfileData] = useState({});

  useEffect(() => {
    return props.getProfileData();
  }, []);

  // function getShots(e) {
  //   props.getShotData();
  // }

  return (
    <div style={{ marginTop: "100px" }}>
      {props.isFetching ? (
        <img src={loading} alt="loading gif" />
      ) : (
        <div>
          <img src={props.profileData.avatar_url} alt="image of isaac" />
          <h4>{props.profileData.name}</h4>
          <Link to="/shots">
            {" "}
            <button> View Dribbble Shots</button>{" "}
          </Link>
        </div>
      )}
      {console.log("I am profileData", props.profileData)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getProfileData, getShotData })(
  Profile
);
