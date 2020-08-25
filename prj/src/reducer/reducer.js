// I need to import actions that enable the rendering of the profile data, and the shots data
// Q: But how am I going to fire off an action that invokes an axios call on the intial mount?
import { GET_PROFILE_DATA } from "../actions/actions";

export const initialState = {
  profileData: {},
  shotsData: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      console.log("I am the action from the reducer", action.payload);
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return state;
  }
};
