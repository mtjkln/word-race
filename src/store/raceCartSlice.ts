import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { InitialState } from "../model";

const initialState: InitialState = {
  word: "",
  pressedKey: "",
  stack: [
    "hard",
    "vodka",
    "extreme",
    "mritunjay",
    "photosynthesis",
    "hakunamatata",
  ],
  points: 0,
  multiplier: 1,
  gameOn: true,
  level: 1,
  name: "",
};
const raceCartSlice = createSlice({
  name: "race",
  initialState,
  reducers: {
    setPressedKey: (state, action: PayloadAction<string>) => {
      state.pressedKey = action.payload;
    },
    updateWord: (state, action: PayloadAction<string | Boolean>) => {
      if (typeof action.payload === "string") state.word += action.payload;
      else state.word = "";
    },
    updatePoint: (state) => {
      state.points = state.points + 100 * state.multiplier;
    },
    updateStack: (state, action: PayloadAction<string>) => {
      state.stack = state.stack.filter((stack) => stack !== action.payload);
      state.level++;
    },
    updateMultiplier: (state, action: PayloadAction<Boolean>) => {
      if (action.payload) state.multiplier += 1;
      else state.multiplier = 1;
    },
    updateGameOn: (state) => {
      state.gameOn = false;
      axios.post(
        "https://word-race-614b2-default-rtdb.firebaseio.com/data.json",
        { score: state.points }
      );
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    reset: (state) => {
      state.level = 1;
      state.multiplier = 1;
      state.points = 0;
      state.word = "";
      state.pressedKey = "";
      state.stack = [
        "hard",
        "vodka",
        "extreme",
        "mritunjay",
        "photosynthesis",
        "hakunamatata",
      ];
      state.name = "";
    },
    restart: (state) => {
      state.gameOn = true;
    },
  },
});

export default raceCartSlice;
