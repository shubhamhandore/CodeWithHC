const user = {
  username: 'shubham',
  logincount: 8,
  signIn: true,

  getUserDetails: function () {
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);

  return this;
}

const greetings = function () {
  console.log(`Welcome ${this.username}`);
};

const userOne = new User('shubham', 10, true);
const userTwo = new User('rushi', 8, true);
console.log(userOne);
console.log(userTwo);
console.log(greetings);
