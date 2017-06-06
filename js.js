function Dog(name, top_speed) {
  this.name = name;
  this.top_speed = 0;
  this.colour = "";
}

Dog.prototype.Gcolour = function(colour) {
  this.colour = colour;
  alert("of colour " + this.colour);
}

Dog.prototype.run = function(top_speed) {
  this.top_speed += top_speed;
  alert(" runs at top speed of " + this.top_speed + " kmph");
}

Dog.prototype.stop = function() {
  this.top_speed = 0;
  alert(" is still");
}

function Shepherd(name, top_speed, age) {
  Dog.apply(this.arguments);
  this.age = age;
}

Shepherd.prototype = Object.create(Dog.prototype);

function Pitbul(name, top_speed, age) {
  Dog.apply(this.arguments);
}

Pitbul.prototype = Object.create(Dog.prototype);

var shepherd = new Shepherd("Max", 50, 7);
shepherd.Gcolour("Brown");

var pitbul = new Pitbul("Anihilator", 36, 2);
pitbul.Gcolour("Whitesmoke");

alert(shepherd.name + shepherd.colour + shepherd.top_speed);
alert(pitbul.name + pitbul.colour + pitbul.top_speed);

