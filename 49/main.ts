//function with multiple hobbies
function myHobbies(...hobbies:string[]){
hobbies.forEach(hobby => {
    //statment foe each hobby 
    hobby
    console.log(`I enjoy ${hobby}.`);
    
});
}
//name of hobby
myHobbies("reading", "coding", "baking");