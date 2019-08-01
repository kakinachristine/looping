var cars=["Benz","Toyota","Audi","Ford"];
// // print out each item in the array
// // console.log(cars[0]);
// // console.log(cars[1]);
// // console.log(cars[2]);
// // console.log(cars[3]);

// // using a for loop
// // var start; declare a var that will store the starting statement
// // for(start statement;condition statement;increament satatement{}
// // var start;
// // for(start=0;start<cars.length;start++){
// //     console.log(cars[start]);
// // }
// // start :defines the beginning of the loop
// // start< cars.length:being the condition statement being checked
// // start++:the start value increases with one after every loop

// // for in loop
// var person ={fname:"Steve",lname:"Jobs",company:"Apple",age:51}

// // accessing array items
// person.fname;
// person["fname"];
// for(x in person){
//     // accessing the key in objects
//     // console.log(x);
//     // accessing the values in objects
//     // console.log(person.x);
//     // console.log(person[x]);
//     // while loop
//     var i=0;
// while(i<10){
//     // console.log(i);
//     i++;
// }
// // do while loop

// }

var x = 0 ;
do{
    console.log(cars[x])
    x++;
}while(x < cars.length);
