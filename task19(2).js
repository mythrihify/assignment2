// 2. create a function to get data from user and display that in callback function// Function to get data from user

function getUserData(callback) {

    // Prompt user for their name

    let name = prompt("Enter your name:");

    // Prompt user for their age

    let age = prompt("Enter your age:");
    
    // Create an object with the user data

    let userData = {
        name: name,
        age: age
    };
    
    // Call the callback function with the user data

    callback(userData);
}

// Callback function to display user data

function displayUserData(data) {
    console.log("User Name: " + data.name);
    console.log("User Age: " + data.age);
}

// Call the getUserData function and pass the displayUserData function as the callback

getUserData(displayUserData);