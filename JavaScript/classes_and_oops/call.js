function SetUsername(username) {
  this.username = username;
  console.log('Called');
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const shubham = new createUser('shubham', 'shubham@gmail.com', '1234');
console.log(shubham);
