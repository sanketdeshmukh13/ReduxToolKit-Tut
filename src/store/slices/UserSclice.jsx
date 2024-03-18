import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions/clearAllUsers";

const SliceUsers = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(jaga, kruti) {
      jaga.push(kruti.payload);
    },
    removeUser(jaga, kruti) {
      jaga.splice(kruti.payload, 1);
    },
    clearAllUsers(jaga, kruti) {
      return [];
    },
  },

  // It is One Type of Reusable Components reducers which
  // we can use in any others slices also
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

export default SliceUsers.reducer;
export const { addUser, removeUser, clearAllUsers } = SliceUsers.actions;
