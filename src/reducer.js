import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
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

    default:
      return state;
  }
};

export default reducer;
