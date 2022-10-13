// 1) Створити функцію конструктор яка створює обєкт юзер інфо в функції повиний бути метод виводу інформації про юзера.
// Метод повинен бути винесений в прототип.Створити метод на прототайп для оновлення ключів обєкту. Створити функцію сорт яка посортує массив з створеними обєктами юзер по віку ( в порядку зростання і порядку зниження)

function userConstructor(name, age){
    this.name = name;
    this.age = age;
}

userConstructor.prototype.userInfo = function(){
    return `name ${this.name} age: ${this.age}`
} 

userConstructor.prototype.userupdate = function(name, age){
    this.name = prompt('input user name');
    this.age = parseInt(prompt(' Input user age'));
}

const user1 = new userConstructor('Gleb', 24); 
const user2 = new userConstructor('Hleb', 34);
const user3 = new userConstructor('Lelik', 32);


const userArr = [user1, user2, user3];
console.log(userArr);

user1.userupdate();

let user1Info = user1.userInfo();
console.log(user1Info);

function sortByAge(arr,bool){
    const sortArr = arr.slice()
        if(bool == true){
            arr.sort((a,b) => a.age > b.age ? 1 : -1);
        }
        else{
            arr.sort((a,b) => a.age < b.age ? 1 : -1);
        }
    return sortArr;
}
console.log(sortByAge(userArr,true));
console.log(sortByAge(userArr,false));

// 2) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі, переметра, та визначити діагональ

function Rectangle(sideA, sideB){
    this.sideA = sideA;
    this.sideB = sideB;
}

let figure = new Rectangle(12, 16);
console.log(figure);

Rectangle.prototype.sqr = function(){
    return  ` Площадь фигуры ${this.sideA*this.sideB}`;
}
console.log(figure.sqr());

Rectangle.prototype.perimeter = function(){
    return `Периметр фигуры ${(this.sideA+this.sideB)*2}`
}
console.log(figure.perimeter());

Rectangle.prototype.diagonal = function(){
    return `Диагональ фигуры ${Math.sqrt(Math.pow(this.sideA, 2)+Math.pow(this.sideB, 2))}`
}
console.log(figure.diagonal());

// 3) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name. Якщо імя користувача довше 3 символів, то ще вивсести перші 3 літери + ...

let Name = prompt('Введите имя пользователя');
function string (str){
    console.log(`${str.substring(0,1)}...${str.substring(str.length - 1)}`);
    if(str.length > 3){
        console.log(`${str.substring(0,3)}...`)
    }
}
string(Name)