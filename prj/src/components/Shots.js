import React, { useState, useEffect } from "react";
import { getShotData } from "../actions/actions";
import { connect } from "react-redux";
import loading from "./loading.gif";
import "./Shots.css";

function Shots(props) {
  // const [profileData, setProfileData] = useState({});

  useEffect(() => {
    return props.getShotData();
  }, []);

  function next() {}

  return (
    <div style={{ marginTop: "100px" }}>
      {props.isFetching ? (
        <img src={loading} alt="loading gif" />
      ) : (
        <div>
          <div className="button-wrapper">
            <div class="button-div">
              <button class="prev">
                <span class="material-icons">keyboard_arrow_left</span>
              </button>
              <button class="next">
                <span class="material-icons">keyboard_arrow_right</span>
              </button>
            </div>
          </div>

          <div className="carousel-container">
            <div className="track">
              {props.shotsData.map((item) => {
                return (
                  <div className="card">
                    <img
                      className="img"
                      key={item.id}
                      src={item.images.hidpi}
                      alt="image"
                    />
                    <div className="name">
                      <p key={item.title}>{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shotsData: state.shotsData,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getShotData })(Shots);
