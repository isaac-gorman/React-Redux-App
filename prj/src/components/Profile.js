import React, { useState, useEffect } from "react";
import { getProfileData } from "../actions/actions";
import { connect } from "react-redux";

function Profile(props) {
  // const [profileData, setProfileData] = useState({});

  useEffect(() => {
    return props.getProfileData();
  }, []);

  return (
    <div>
      <h2>Hello</h2>
      {console.log("I am profileData", props.profileData)}
      <div>
        <img src={props.profileData.avatar_url} alt="image of isaac" />
        <h4>{props.profileData.name}</h4>
        {/* <button onClick={}>View Dribbble Shots</button> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
  };
};

export default connect(mapStateToProps, { getProfileData })(Profile);
