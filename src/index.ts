import { User } from "./models/User";



const user = new User({
    name: 'MyName',
    age: 22
});

user.set({age: 44, name: 'Teste2'});
user.set({age: 54});
console.log(user);

