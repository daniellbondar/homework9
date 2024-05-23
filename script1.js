// let number = prompt('Enter the number')

// if(number >= 0){
//     console.log(number **3);
// }
// if(number < 0){
//     console.log(number **2);
// }


// let number1 = prompt('Enter the number of students')
// let number2 = prompt('Enter the number of chairs')

// if(number2 >= number1){
//     console.log('There are enough chairs');
// }
// if(number2 < number1){
//     console.log('There are not enough chairs');
// }

let users = ['John', 'Bob', 'Tom', 'Nick', 'Sam', 'Alex', 'Jack'];
console.log(users.length);

console.log(users[users.length -1]);

users.shift();
console.log(users);

users.push('Landon');

users[4] = 'Dan';

users.pop();
console.log(users);