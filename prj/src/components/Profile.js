import React, { useState, useEffect } from "react";
import { getProfileData } from "../actions/actions";
import { connect } from "react-redux";
import loading from "./loading.gif";

function Profile(props) {
  // const [profileData, setProfileData] = useState({});

  useEffect(() => {
    return props.getProfileData();
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      {props.isFetching ? (
        <img src={loading} alt="loading gif" />
      ) : (
        <div>
          <img src={props.profileData.avatar_url} alt="image of isaac" />
          <h4>{props.profileData.name}</h4>
          {/* <button onClick={}>View Dribbble Shots</button> */}
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

export default connect(mapStateToProps, { getProfileData })(Profile);
