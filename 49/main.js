//function with multiple hobbies
function myHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        //statment foe each hobby 
        hobby;
        console.log("I enjoy ".concat(hobby, "."));
    });
}
//name of hobby
myHobbies("reading", "coding", "baking");
