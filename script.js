// // 1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// let user  = {
//     name: "yugant",
//     email: "yugantsingh@gmail.com",
//     login: function(){
//         console.log("user logged In successfully");
//     }
//  }

// console.log(user.name,user.email, user.login());
//====================================================
// // 2.	Imagine you now have 5 users.
// // First, think how you would manage them without using a class.
// // Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.


// class Users{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     login(){
//         console.log(`${this.name} logged in successfully`);
//     }
// }


// let user1  = new Users("Yugant", "yugant@gmail.com");
// let user2  = new Users("Ankita", "ankita@gmail.com");
// let user3  = new Users("Samay", "samay@gmail.com");

//---------------------------------------------------

// // 3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// class DiscountPrice{
//     constructor(name,price){
//         this.name = name;
//         this.price = price
//     }
//     discount(price){
//            return this.price-200;
//     }
// }

// let p1  = new DiscountPrice("mobile" , 1500);
// console.log(p1.discount());


//--------------------------------------------------
// // 4.	Create a Car class with the following:
// // brand
// // speed
// // a drive method that prints the car brand and speed
// // 5.	Create two different car objects from the same class and verify that their data is different.


// class Car{
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//     console.log(`${this.brand} - ${this.speed}`);   
//     }
// }

// let c1  = new Car("Toyota" , 156);
// let c2  = new Car("Defender" , 240);

//--------------------------------------------------

// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?



//--------------------------------------------------
//  7.	Create a Student class whose constructor accepts name and roll number.

class Student {
    constructor(name,roll){
        this.name = name;
        this.roll = roll;
    }

    introduce(){
        console.log(`${this.name} - ${this.roll}`);
        
    }
}

let s1 = new Student("Yugant", 124);
let s2 = new Student("Ankita", 135);
