import { configureStore } from "@reduxjs/toolkit";
import { reset } from "./actions";
import { addMovie, moviesReducer, removeMovie } from "./slices/moviesSlice";
import { addSong, removeSong, songsReducer } from "./slices/songsSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song",
// });

// const endingState = store.getState();
// console.log(JSON.stringify(endingState));
export { addMovie, addSong, removeMovie, removeSong, reset, store };
