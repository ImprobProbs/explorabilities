module.exports = {
  getToken() {
    return localStorage.token;
  },
  logout() {
    delete localStorage.token;
  },
  loggedIn() {
    return !!localStorage.token;
  }
};
