import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const s = new SpotifyWebApi();

function App() {
  //pull any value from datalayer at anywhere
  const [{user,token }, dispatch] = useStateValue();

  // run code based on a given condition
  useEffect(() => {
    
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      //giving spotify token to spotify
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
 
      //now getting data from spotify_web_api i.e our app is talking with spotify
      s.getMe().then((user) => {
        //dispatch will pop user into datalayer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
    
  }, []);

  return (
    <div className="app">
      {
        token ? 
          <Player spotify={s}/>
         :<Login/>    
      }
    </div>
  );
}

export default App;
