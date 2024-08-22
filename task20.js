// 1. get the value of the first element in an array that has value greater than 20
const num = [5, 16, 30, 90, 29, 200, 39, 49, 100];
const findRes = num.find((e, i, a) => {
    return e >= 20;
});

console.log(findRes);

// 2. get the value of the first element in an array that has value less than 20
const findLes = num.find((e, i, a) => {
    return e <= 20;
});

console.log(findLes);

// 3. filter data based on a id(property) in an array of objects: pick any random id value
const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 40 }
];

function filterById(array, id) {
    return array.filter(item => item.id === id);
}


const filteredData = filterById(data, 2);
console.log(filteredData);


// 4. check element is odd or even in an array [90, 89, 56, 45]
const numbers = [90, 89, 56, 45];

numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
});

// 5. create a class Book: type_of_book(), no. of pages, type of pages, author
class Book {
    constructor(title, pageCount, pageType, author) {
        this.title = title;
        this.pageCount = pageCount;
        this.pageType = pageType;
        this.author = author;
    }

    type_of_book() {
        return this.title;
    }
}

const myBook = new Book("The Great Gatsby", 300, "paperback", "F. Scott Fitzgerald");
console.log(myBook.type_of_book());

// 6. create a class Animal: walk(), eat(), climb(), gender, name, disease

class Animal {
    constructor(name, gender, diseaseCode) {
        this.name = name;
        this.gender = gender;
        this.diseaseCode = diseaseCode;
    }

    walk() {
        console.log(this.name+" is walking.");
    }

    eat(food) {
        this.food=food;
        console.log(this.name +" is eating " +this.food+".");
    }

    climb(tree) {
        this.tree=tree;
        console.log(this.name+" is climbing "+this.tree+".");
    }
}

const myAnimal = new Animal("Tiger", "male", "A123");
myAnimal.walk(); 
myAnimal.eat("meat"); 
myAnimal.climb("a tall tree");
