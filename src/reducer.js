import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:"BQDAdztlbrM6c_PitecU3WuzU5nj-HviBAHt_yFTM0WLP2dW7XGWxwFLdu2nDVUBYpqoAW_VqKDbWWG2dTFnwLFPUeq65LDRLNQKBBn3Cu6o78iq-cDuMWUdOOrsMeVizeQasb9JtnYe3kzGRmAApvSKL5lSoGMmSP9knMiWS6Ey-UToB2We",
};

const reducer = (state, action) => {
  console.log("this is ",action);
  //here we push anything into the state/dataLayer
       //Action -> type,[payload]
  switch (action.type) {
    //[payload]
    case "SET_USER":
      return {
        //keep whatever is in the current state
        ...state,
        //and update with new action
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };

      case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
