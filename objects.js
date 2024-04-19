

// Given an array of objects, each object representing a person with a name and age property, write a function that returns a new array containing the names of all people who are 18 years old or older. const people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Eunice', age: 22 },
//     { name: 'Charlie', age: 14 },
//     { name: 'Max', age: 19 },
//   ];

const people=[
    {name:"Alice",age:17},
    {name:"Eunice",age:22},
    {name:"Charlie",age:14},
    {name:"Max",age:19},
];
function arryPeople(){
    
    return people.filter(person => person .age > 18).map(person=>person.name)
      
}
console.log(arryPeople(people))
arryPeople()




// Write a function that takes an array of objects, where each object represents a product with a name, price, and category property. The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values. const products = [
//     { name: 'Laptop', price: 1200, category: 'Electronics' },
//     { name: 'Shirt', price: 25, category: 'Clothing' },
//     { name: 'Headphones', price: 80, category: 'Electronics' },
//     { name: 'Shoes', price: 60, category: 'Clothing' },
//   ];
const product =[
    {name:"laptop",price:1200,category:"Electronic"},
    {name:"Shirt",price:25,category:"Clothing"},
    {name:"Headphones",price:80,category:"Electronic"},
    {name:"Shoes",price:60,category:"Clothing"},

];

function categoryProperty(){
    arrange= Object.groupBy(product,({categories}) => categories)
    console.log(arrange);
}
categoryProperty();

// Given an array of objects, where each object represents a student with a name and an array of scores, write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85. const students = [
//     { name: 'John', scores: [90, 80, 85] },
//     { name: 'Jane', scores: [95, 92, 88] },
//     { name: 'Jim', scores: [70, 80, 75] },
//     { name: 'Jill', scores: [85, 90, 84] },
//   ];

const students = [
    {name:"John",score:[90,80,85]},
    {name:"Jane",score:[95,92,88]},
    {name:"Jilm",score:[70,80,75]},
    {name:"Jill",score:[85,90,84]},
];

function greatAvaragescore(marks){
    const averageScore= (marks)=>{
        return marks.reduce((sum,marks)=>sum+marks,0)/marks.length;
    }
    const result= students.filter(students=>
        averageScore(students.marks)>=85)
        const names = result.map(students=>students.name);
        console.log(names);
};
greatAvaragescore()



// Given an object representing a car, with properties for the make, model, year, and a method to display the car's information, 
// write a function that takes the car object and adds a new method to the object called age. The age method should return the current age of the car
//  based on the current year and the car's year property. const car = {
//     make: 'Ford',
//     model: 'Ranger',
//     year: 2023,
//     displayInfo: function() {
//       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//     },
//   };
const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2003,}

function getCarAge (car) {
    let currentYear = new Date().getFullYear();
    car.age = (currentYear - car.year);
    return car
   }
    console.log(getCarAge(car));
    car.displayInfo();