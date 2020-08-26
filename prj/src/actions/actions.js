// Q: What actions does my app need to do?
// - My initial page needs to request data from my dribbble API
// - - So I need to use an axios call
import axios from "axios";

export const LOADING = "LOADING";
export const GET_PROFILE_DATA = "GET_PROFILE_DATA";
export const GET_SHOT_DATA = "GET_SHOT_DATA";

export const getProfileData = () => (dispatch) => {
  dispatch({ type: LOADING });

  setTimeout(function () {
    axios
      .get(
        "https://api.dribbble.com/v2/user?access_token=036b6a98e579417543d88efd1a56ed99ee0ddb7f865c9475d41456263f488948"
      )
      .then((res) => {
        console.log("I am res", res);
        dispatch({ type: GET_PROFILE_DATA, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, 1000);
};

export const getShotData = () => (dispatch) => {
  dispatch({ type: LOADING });

  setTimeout(function () {
    axios
      .get(
        "https://api.dribbble.com/v2/user/shots?access_token=036b6a98e579417543d88efd1a56ed99ee0ddb7f865c9475d41456263f488948"
      )
      .then((res) => {
        console.log("I am res", res);
        dispatch({ type: GET_SHOT_DATA, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, 1000);
};
