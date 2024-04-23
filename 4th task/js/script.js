const pi = 3.14;

let radius = prompt("Enter radius of a circle");

let C = 2*pi*radius;

let height = parseInt(C);

let box = document.getElementById("box");

console.log(C)

if (height){
    box.style.width = height + "mm";
    box.style.height = height + "mm";
    document.write("   The area of the circle is " + C + "mm");
}
else{
    document.write("Nothing to show here :( ");
}