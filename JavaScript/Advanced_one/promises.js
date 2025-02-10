const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task is completed');
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log('Promised Consume');
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 2');
    resolve();
  }, 1000);
}).then(function () {
  console.log('Async taks 2 Solve');
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: 'Shubham',
      email: 'shubham@gmail.com',
    });
  });
}, 1000);

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Shubham', password: '12345' });
    } else {
      reject('ERROR: something went wrong');
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log('The promise is either or rejected'));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'JavaScript', password: '12345' });
    } else {
      reject('ERROR: JS went wrong');
    }
  }, 1000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://api.github.com/users/shubhamhandore")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR:",error);

//     }
// }

// getAllUsers().

fetch('https://api.github.com/users/shubhamhandore').then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
