// const : 상수 , let : variable 변환(update) 가능
// null is different from False, null means nothing.
// undefined : 값이 지정되지 않은것, 값을 정해주지 않은 변수(variable)

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// console.log(daysOfWeek);

// get item from array
// console.log(daysOfWeek[4]);

// add one more day to the array
// daysOfWeek.push("sun");

// {} : object 만드는 가로는 중가로

// NaN : not a number

// function othersName() {
//     name: "nico"
// }

// const player = {
//     name: "jinsung",
//     sayHello: function(otherPersonsName){
//         console.log("Hello!! " + otherPersonsName + " nice to meet you");
//     }
// }

// player.sayHello("lynn");
// player.sayHello(player.name);

// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     minus: function(a, b) {
//         return a - b;
//     },
//     multi: function(a, b) {
//         return a * b
//     },
//     divi: function(a, b) {
//         return a / b
//     },
//     powerOf: function(a, b) {
//         return a ** b
//     }
// }

// const plusResult = calculator.add(2, 3);
// console.log(plusResult);
// const minusResult = calculator.minus(5, 2);
// console.log(minusResult);
// const multiResult = calculator.multi(3, 4);
// console.log(multiResult);
// const diviResult = calculator.divi(10, 2);
// console.log(diviResult);
// const powerResult = calculator.powerOf(3, 6);
// console.log(powerResult);

// const age = 65;
// function calculateKrAge(ageOfForeigner) {
//     ageOfForeigner + 2;
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age)

// console.log (krAge)


// if(condition) {
//     // condition === true
// }
// else {
//     // condition === false
// }
const age = parseInt(prompt("how old are you?"));

if(isNaN(age)) {
    console.log("Please enter a number");
} else if(age < 18 && age >=0){
    console.log("You are too young");
} else if(age <= 65 && age >= 18) {
    console.log("You can drink");
} else if(age > 65) {
    console.log("You can do whatever you want");
    if (age == 100) {
        console.log("amazing");
    }
} else {
    console.log("Please enter the positive number")
}

// And operator : &&, both of the components should be true if they will be true
// Or operator : ||, if one of the compoents is true, they will be true
// true && true = true
// true && false = false
// false && true = false
// false && false = false
// true || true = true
// true || false = true
// false || true = true
// false || false = false