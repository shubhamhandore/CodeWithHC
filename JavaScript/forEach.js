// const greet = ["Shubham","Nitin","Mayur"]

// greet.forEach((item)=>{
//     console.log(item)
// })

const myObject = [
  {
    languageName: 'JavaScript',
    languageFile: 'js',
  },
  {
    languageName: 'Java',
    languageFile: 'java',
  },
  {
    languageName: 'Python',
    languageFile: 'py',
  },
  {
    languageName: 'Ruby',
    languageFile: 'rb',
  },
];

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>num>4)
// console.log(newNums)

// const newNums = myNums.filter((num)=>{
//     return num>4
// })

// console.log(newNums);

// const newNums = []

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

// const newNums = myNums
//     .map((num)=>num*10)
//     .map((num)=>num+1)

const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currVal: ${currval}`)
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

console.log(myTotal);
