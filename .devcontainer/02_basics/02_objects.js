const mySymbol=Symbol("bhai")
const JsUser= {
    name:"adnan",
    age:21,
    email:"adnan@bhai.com",
    [mySymbol]:"bhai",

}
console.log( JsUser["email"]);
console.log(JsUser);

/*Object.freeze(JsUser) //stops in making changes in the object
JsUser.age=69;
console.log(JsUser);*/

JsUser.greeting= function(){
    console.log(`hello JS user,  ${this.name}`);

    
}
 
console.log(JsUser.greeting());


 



