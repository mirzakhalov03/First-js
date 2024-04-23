let Name = prompt("Enter your name");


let change = confirm("Do you want ot change your name?");

if (change){
    let newName = prompt("Enter new name:");
    document.write("Hello, " + newName.charAt(0).toUpperCase() + newName.slice(1) + " !!!" + "<br>");
    document.write("Welcome to the world of Creativity and inspiration " + "<br>");
}
else{
    document.write("Hello, " + Name.charAt(0).toUpperCase() + Name.slice(1) + " !!!" + "<br>");
    document.write("Welcome to the world of Creativity and inspiration " + "<br>");
    document.write("Thank you for your time.");
}