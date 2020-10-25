var fred = (function User() {
  var username, password;

  function doLogin(user, pw) {
    username = user;
    password = pw;

    // do the rest of the login work
    console.log(`login with ${username} : ${password}`);
  }

  var publicAPI = {
    login: doLogin,
  };

  return publicAPI;
})();

fred.login("fred", "12Battery34!");
