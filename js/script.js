// let name =undefined;
// const UserName ="fatemeh";
// let age = 32;
// let admin = true;

// console.log(UserName , age , admin, name);
// let person = {
//     Fname : "ali",
//     Lname : "jahani",
//     Age : 30,
// }
// console.log(person.Lname)

// let uni = ["khoy" , 1383 , "mahaleh"]

// uni[3] = "alavi"
// uni[0] = "ormia"
// console.log(uni[0]);

// function bank (name){
//     let pro = "hi";
//     console.log(pro +" "+ name)

// }

// function square (number){
//     return  number * number;

// }

// let result = square(4);
// console.log(result);

// let x = 10;
// let y = 3;

// x-= y;
// console.log(x);

// //strict equality
// //=== !===

// let a = 1;
// console.log(a == 1);

// console.log('1'== 1);
// console.log(true == 1);
// console.log('1'=== 1);

// let isLoggedIn = false;
// let  btn = isLoggedIn === true ? "panelkaebary" : "login"
// console.log(btn);

// console.log(true && false && true);

//  let prodductCount = 3;
//  let ProductPrice =1000;

//  let credit = 1200;

//  let buy = prodductCount>0 && credit>= ProductPrice;
//  console.log(buy);

// if (prodductCount>0 && credit>= ProductPrice){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// false , un difined , null , 0 , "" , nan
// true , 1, -2 ,

// let hour = prompt("ساعت را  وارد نمایید")

// hour  = {
//     min: 1,
//     max : 24
// }

// if (hour>=6 &&  hour <12){
//     aler("good morning");

// }
// else if(hour >=12 && hour < 18 ){
//     alert("good afternoon");

// }
// else{
//     alert("good evening");
// }

// // گرفتن ساعت از کاربر
// let hour = parseInt(prompt("لطفاً ساعت را وارد کنید (1 تا ۲۳):"));

// // تعریف بازه‌ها به صورت آرایه از آبجکت
// let ranges = [
//   { min: 0, max: 11, message: "صبح بخیر ☀️" },
//   { min: 12, max: 17, message: "ظهر بخیر 🌤️" },
//   { min: 18, max: 23, message: "عصر بخیر 🌙" }
// ];

// // پیدا کردن بازه‌ی درست
// let result = ranges.find(r => hour >= r.min && hour <= r.max);

// // نمایش پیام
// if (result) {
//   alert(result.message);
// } else {
//   alert("عدد وارد شده باید بین ۰ تا ۲۳ باشد!");
// }

// let number = 113;

// switch (number) {
//   case 112:
//     console.log("guest user");
//     break;
//   case 119:
//     console.log("admin user");
//     break;
//   case 113:
//     console.log("UUU user");
//     break;
//   default:
//     console.log("unknown user");
// }

// حلقه ها
// for
// while
// do while
// for ... in
// for ... of

// for(let i=0; i<5 ; i++){
//   console.log('neon');
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; ; i++) {
//   if (i % 7 === 0) {
//     console.log("عدد مضرب ۷ پیدا شد:", i);
//     break; // برای جلوگیری از بی‌نهایت بودن
//   }
// }

// for (let i = 0, j = 10; i < j; i++, j--) {
//   console.log(`i = ${i}, j = ${j}`);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let row = "";
// let size = 5;
// for (let i = 1; i <= size; i++) {
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let stri = "JavaScript";
// console.log(stri.length);

// let str = "JavaScript";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed); // tpircSavaJ

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += (i * j).toString().padStart(4, " ");
//   }
//   console.log(row);
// }

// let sum = 0;
// for (let i = 1; i <= 10; sum += i++);
// console.log("جمع ۱ تا ۱۰ =", sum);

// let i =0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let x = 10;
// do {
//   console.log(x);
//   i++;
// } while (x < 5);

// const person = { name: "mohammad", age: 27 };
// const colors = ["red", "green", "blue"];

// for(let key in person){
//   // console.log(key);
//   console.log(person[key]);
// }

// for(let index in colors){
//   console.log(index);
//   console.log(colors[index++]);

// }
// for(let color of colors){
//   console.log(color);
// }

// let i = 0;
// while (i <= 10) {
//   if (i == 5) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// function draw() {
//   console.log("draw");
// }
// draw();

// let circle = {
//   radius: 1,
//   loaction: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// //factory function
// function createCircle(radius) {
//   return {
//     radius, //radius:radius
//     draw() {
//       //draw : function()
//       console.log("draw");
//     },
//   };
// }
// let circle1 = createCircle(1);
// console.log(circle1);
// let circle2 = createCircle(5);
// console.log(circle2);

//constructer function

//قاعده نام گذاری
//camel notation : oneTwoThree برای فکتوری
//pascl notation : OneTwoThree برای کنسترکتور

// function car(model, color, speed) {
//   return {
//     model,
//     color,
//     speed,
//     sayTheCar: function () {
//       console.log(
//         "این ماشین مدل: " +
//           model +
//           " با رنگ : " +
//           color +
//           " وسرعت : " +
//           speed +
//           " است "
//       );
//     },
//   };
// }

// let car1 = car("سمند", "ابی", 300);
// car1.sayTheCar();

// function CreateCar(model, color, speed) {
//   this.model,
//   this.color,
//   this.speed,
//   this.sayTheCar = function () {
//       console.log(
//         "این ماشین مدل: " +
//           model +
//           " با رنگ : " +
//           color +
//           " و سرعت : " +
//           speed +
//           " است "
//       )
//     }
// };
// let car11 = new CreateCar("پزو", "سفید", 200);
// car11.sayTheCar();

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   }
// }

// let circlekeys = Object.keys(circle);
// console.log(circlekeys);

// for (let key of circlekeys) {
//     console.log(key);
// }

// let circleEntries = Object.entries(circle);
// console.log(circleEntries);
// for (let entries of circleEntries){
//     console.log(entries);
// }
// if ('radius' in circle){
//   console.log('yes');
//   console.log('draw'in circle);
// }

// const another = {};

// for(let key in circle){
//   another[key] = circle[key]
// }

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   }
// }

// const another = {color:'red'  , ...circle}
// console.log(another);

// function getRandomArbitrary(min,max) {
//   return Math.floor( Math.random() * (max-min)+min);
// };

// console.log(getRandomArbitrary(10,50));
/////////////////////////////////////////////////////////////////////////////////////////////

// let name = "fatemeh";
// let msg = `hi ${name} . thank you`;
// console.log(msg);

/////////////////////////////////////////////////////////////
//get date   دوباره نگاه کن و تمرین کن از ساهت 4.30
////////////////////////////////////////////////////////////
//const numbers = [3,4];
//numbers.push(2,6);//اضافه کردن به اخر ارایه
// numbers.unshift(32,1)//اضافه کردن به اول ارایه
// numbers.splice(3,0,"a",10,20)//هر کجا که میخواهیم قرار بدیم 3 نشاندهنده اینه  ت کدوم اندیس گذاشته بشه 0نشانهده اینه بعد اون چند تا عنصر حدف بشه . اخرین جایگاه نشاندهنده اینه که چی اضافه بشه

//console.log(numbers);
//////////////////////////////////////////////////////////////
//const shomare = [1,5,20,9,5,3];
// console.log(shomare.indexOf(9));
// console.log(shomare.lastIndexOf(5));
//console.log(shomare.indexOf(5,2));//دومین ارگمان به ما میگه که که از کدام اندیس شروع به جستجو کنه

// if(shomare.includes(1)){
//     console.log('yes');
// }else{
//     console.log('no');
// }
////////////////////////////////////////////////////////////////
// const courses = [
//     {id:1 , name :'a'},
//     {id:2 , name :'b'}
// ];
//console.log(courses.includes({id : 1 , name : 'a'}));

// const result = courses.find(function(course){
//     return course.id === 1
// })
// console.log(result);
// const result2 = courses.findIndex(function(course){
//     return course.id === 2
// })
// console.log(result2);
// const result3 = courses.find(course => course.id === 1 )
// console.log(result3);

// const result4 = courses.findIndex(course => course.id ===2 )
// console.log(result4);
////////////////////////////////////////////////////////////////////

// const degree = [20,15,8,11.5,18];
// const last = degree.pop();
// console.log(degree);
// console.log(last);
// const first = degree.shift();
// console.log(degree);
// console.log(first);
// degree.splice(2,1,88);
// console.log(degree);
// const middle = degree.splice(2,1);
// console.log(middle);

////////////////////////////////////////////////////////////////////////

// let addd = [1,2,3,4];
// let hi = addd;

//addd.length = 0;
// addd.splice(0,addd.length);

// console.log(addd);
// console.log(hi);

/////////////////////////////////////////////////////////////////////////

// const first = [1,2,3];
// const secend =[4,5,6];

// const combined = first.concat(secend);//برای ترکیب کردن دو ارایه
// console.log(combined);
// console.log(combined.slice(2,3));

// const first = [{id:1}];
// const secend =[4,5,6];

// const combined = first.concat(secend);
// first[0].id = 10;
// console.log(combined);
// console.log(first);

/////////////////////////////////////////////////////////////////////////

// const first = [1,2,3];
// const secend =[4,5,6];

// const combined = ['a',...first,'b',...secend,'c'];
// console.log( combined);

//const copy = combined.slice();
// const copy = [...combined]
// console.log( copy);

////////////////////////////////////////////////////////////////////////

//برای پیمایش کردن از for of استفاده میکنیم

//const numbers = [5,10,7];

// for(let number in numbers){
//     console.log(number);
// }//index
// for(let number of numbers){
//     console.log(number);
// }//value

//numbers.forEach((number,index)=> console.log(index,':',number))

//////////////////////////////////////////////////////////////////////////

// const numbers = [5,10,7];

// const joined = numbers.join(" ");
// console.log(joined);

// const msggs='neon coding is cool';
// const split = msggs.split(' ');
// console.log(split);
// const join = split.join('-');
// console.log(join);

//////////////////////////////////////////////////////////////////////////

// const numbers = [8,3,5];
// numbers.sort();
// const reverse = numbers.reverse();
// console.log(reverse);
//console.log(numbers);
//console.log(numbers.sort());

// const mager = [
//     {id:1,name:'html'},
//     {id:2 , name:'css'}
// ];

// mager.sort(function(a,b){
//    const namaA = a.name.toLowerCase();
//    const nameB = b.name.toLowerCase();
//    if(namaA<nameB)return -1;
//    if(namaA>nameB)return 1;
//    return 0;
// })
// console.log(mager);

//////////////////////////////////////////////////////////////////////////

// const numbers = [1,2,-3,4];

// console.log(numbers.some(function(value){
//     return value >= 0
// }));

////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, -3, 4];

// console.log(
//   numbers.filter(function (value) {
//     return value >= 0;
//   })
// );

// console.log(
//   numbers.filter(value => value >= 0

// ));

// const users = [
//     {name : "ali" , age : 18},
//     {name : "ali" , age : 27},
//     {name : 'ali' , age : 16},
//     {name : 'ali' , age : 14},
//     {name : 'ali' , age : 20},

// ];
//  const filterd = users.filter(user=> user.age >= 18)

// console.log(filterd);

////////////////////////////////////////////////////////////////////////////

// const products = ["html" , "css" , "js"];

// const items = products.map(product => `<li>${product}</li>`)
// console.log(
//     items
// );

// const html = `<ul>${items.join('')}</ul>`
// console.log(
//     html
// );
// console.log(
//     items
// );

// تبدیل هر المنت ارایه به یک ابجکت
// const items = products.map(product => ({value : product}))
// console.log(items);

// const numbers = [1, 2, -3, 4];

// const items = numbers.filter(v => v>=0).map(p=> ({value : p}));
// console.log(items);

////////////////////////////////////////////////////////////////////////

// const Video = {
//   title: "a",
//   tages: ["a", "b", "c"],
//   showTags() {

//     this.tages.forEach(function (tag) {
//         console.log(this, tag);
//     },this)
//   },
// }
// Video.showTags();

////////////////////////////////////////////////////////////////////////

// function sum(a,b){

//     let total = 0 ;
//     for (let value of arguments){
//         total += value;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5));

////////////////////////////////////////////////////////////////////////

// const numbers = [1, -1 , 2 , 3];

// let sum = 0;
// for (let n of numbers){
//     sum += n;
// }
// console.log(sum);

// let sum = numbers.reduce( function (ac , cur){
//     return ac + cur;
// }, 0)
// console.log(sum);

/////////////////////////////////////////////////////////////////////////

// function interest (principal , rate , years){
//     rate = rate || 3.5;
//     years = years || 5;
//     return ((principal * rate) / 100) * years;
// }
// console.log(interest(100000));

// //راه جدید
// function interest (principal , rate=3.5 , years=5){
//     return ((principal * rate) / 100) * years;
// }
// console.log(interest(100000));

////////////////////////////////////////////////////////////////////////

// const person = {
//     Fname : "ali",
//     Lname : "jahan",
//     get fullName(){
//        return `${this.Fname} ${this.Lname}`
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         this.Fname = parts[0];
//         this.Lname = parts[1]

//     }
// }
// person.fullName="reza farhodi"
// console.log(person.fullName);

// console.log(person.Fname);

////////////////////////////////////////////////////////////////////////

// let person = { name: "mohammad" };

// Object.defineProperty(person, 'name', {
//   writable: false,
//   enumerable: false,
// });

// console.log(Object.keys(person));

// person.name = "ali";
// console.log(person);

///////////////////////////////////////////////////////////////////////


