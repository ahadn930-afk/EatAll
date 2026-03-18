let projectName = "Eat All Food Website";
let totalItems = 10;
let isWebsiteActive = true;
let foodItems = ["Burger", "Pizza", "Fries", "Sandwich"];
let projectInfo = {
    developer: "Abdul Ahad",
    semester: 6,
    subject: "Web Development"
};


document.getElementById("name").innerHTML = "Project Name: " + projectName;
document.getElementById("items").innerHTML = "Total Items: " + totalItems;
document.getElementById("status").innerHTML = "Website Active: " + isWebsiteActive;
document.getElementById("foods").innerHTML = "Food Items: " + foodItems;
document.getElementById("developer").innerHTML = "Developer: " + projectInfo.developer;


const showSummary = () => {
    return "Welcome to " + projectName + ". Total menu items are " + totalItems;
};


const displaySummary = () => {
    document.getElementById("summary").innerHTML = showSummary();
};