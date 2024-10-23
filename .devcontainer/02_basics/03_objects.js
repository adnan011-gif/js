const obj1={1:'a',2:'b', 3:'c' ,}
console.log(obj1);

const obj2={4:'a',5:'b',6:'c',}

const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);

const obj4= {...obj1,...obj2}
console.log(obj4);

const user=[
    {  id:"123aa",
       email:'adnan@bhai' ,
    }

    ,{  id:'123bb',
        email:'bhalu@gang',}
    
]
console.log(user[1].id);


