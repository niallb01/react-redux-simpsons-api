import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  search: "",
  like: [false],
};

// reducer - does something based on action - modifies the state
export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    SET_CHARACTERS: (state, action) => {
      state.characters = action.payload;
    },
    SET_SEARCH: (state, action) => {
      state.search = action.payload;
    },
    DELETE: (state, action) => {
      const index = state.characters.findIndex((item) => {
        return item.quote === action.payload;
      });
      state.characters.splice(index, 1);
    },
    SET_LIKE: (state, action) => {
      const index = state.characters.findIndex((item) => {
        return item.quote === action.payload.quote;
      });
      state.characters[index].liked = action.payload.liked;
    },
  },
});

// action creators are generated for each case reducer function - deconstructed from above
export const { SET_CHARACTERS, SET_SEARCH, DELETE, SET_LIKE } =
  characterSlice.actions;

export default characterSlice.reducer;
