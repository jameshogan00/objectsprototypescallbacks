// CONSTRUCTOR PATTERN FOR CREATING OBJECTS


// this constructor can hold as many objects as it likes....
function Country (people, habits, towns){

        this.people = people;
        this.habits = habits;
        this.towns = towns;

        this.peopleType = function(){
        	console.log("The people here are very "+this.people);
        }

        this.manner = function(){
        	console.log("They tend to "+this.habits+" "+"a lot.");
        }

        this.nation = function(){
        	this.towns.forEach(function (eachCounty) {
               console.log("People are from: "+ eachCounty);
        	});
        }

}

//....and the methods get invoked down here
var ireland = new Country ("friendly", "drink", ["dublin", "cork", "waterford", "limerick"]);
ireland.nation();
ireland.manner();
ireland.peopleType();

var germany = new Country ("efficient", "work", ["berlin", "hamburg", "dresden", "munich"]);
germany.nation();
germany.manner();
germany.peopleType();




///////////////////////////////////////////////////////////////////////////////////////////////////////////////





// USING PROTOTYPES


//set up an object in constructor notation
function Face () {
	this.eyes = 2;
	this.nose = 1;
	this.race = true;
}

// here I add a "describeFace" method to the Face prototype property
Face.prototype.describeFace = function() {
	console.log("their faces have "+this.eyes+" eyes, " +this.nose+" "+"nose");
}

// Here I add a "isHuman" method to the Face prototype property
Face.prototype.isHuman = function () {
	if(this.race) {
		console.log("I am a human");
	}
}

// here's a new object constructor called "Irishpeople"
function Irishpeople (languagetype, behaviourtype){
    this.language = languagetype;
    this.behaviour = behaviourtype;
}

// Set the "Irishpeople's" prototype to the "Face" constructor, thus inheriting all of Face.prototype methods and properties.
Irishpeople.prototype = new Face ();

// Here's a new object, dubliner, with the "Irishpeople" constructor
var dubliner = new Irishpeople("dub accent", "rowdy");

// here I invoke the "dubliner" object which inherits properties from both the "Irishpeople" and "Face" properties
console.log(dubliner.language);
console.log(dubliner.describeFace());



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CALLBACKS
// here I use the "getUserInput" function to execute numerous types of callback functions....
// remember that callbacks can be used as parameters in functions...



// First, I setup the generic poem creator function; it will be the callback function in the getUserInput function below.
function genericPoemMaker(name, gender) {
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

//The callback, which is the last item in the parameter set below, will be the genericPoemMaker function we defined above.
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;

    // this is just to make sure that the callback is a function
    if (typeof callback === "function") {
    // ...and if so, execute the callback function with the parameters below
    callback(fullName, gender);
    }
}


// Call the getUserInput function and pass the genericPoemMaker function as a callback....

getUserInput("Naomi", "Watts", "Woman", genericPoemMaker);
// Output
/* Naomi Watts is finer than fine wine.
Altruistic and noble for the modern time.
Always admirably adorned with the latest style.
A Woman of unfortunate tragedies who still manages a perpetual smile.
*/

// Because the getUserInput function is only handling the retrieving of data, 
//we can pass any callback to it. For example, we can pass a greetUser function like this:

function greetUser(customerName, sex)  {
   var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
  console.log("Hello, " + salutation + " " + customerName);
}

// Pass the greetUser function as a callback to getUserInput
getUserInput("Bill", "Gates", "Man", greetUser);

// And the output is "Hello Mr. Bill Gates"