const userReducer = {
    login(state, { payload }) {
        state.file = payload.file;
        state.isLoggedIn = true;
        state.name = payload.name;
        state.email = payload.email;
        state.phone = payload.phone;
        state.password = payload.password;
    },
    logout(state) {
        state.isLoggedIn = false;
        localStorage.clear();
    },
}
export default userReducer