import { createSlice } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

const userSlice = createSlice({
    name: "user",
    initialState: {
        file: null,
        name: "",
        email: "",
        phone: "",
        password: "",
        isLoggedIn: false || JSON.parse(localStorage.getItem("user"))?.isLoggedIn
    },
    reducers: userReducer

});
export const userAction = userSlice.actions;
export default userSlice.reducer;