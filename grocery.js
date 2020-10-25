//Melinda Minton
//Week 1 - SWDV 665 - Advance Software Topics 
//October 25, 2020
// create a class
var Grocery = /** @class */ (function () {
    // add a constructor
    function Grocery(n, q, p) {
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
    return Grocery;
}());
// create a list of grocery items
var list_of_items = [
    new Grocery("milk", 3, 10),
    new Grocery("bread", 6, 25),
    new Grocery("egg", 11, 10),
    new Grocery("Apple", 2, 1)
];
// access the html element with app id
var ele = document.getElementById("app");

// create a <p> element for each item list and append it to the html page
list_of_items.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = e.name + " " + e.quantity + " -> $" + e.price;
    ele.appendChild(p);
});
