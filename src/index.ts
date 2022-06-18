import { User } from "./models/User";


const user = new User({id: 1});
//console.log(user.get('name'));

user.on('change', ()=>{
    console.log('changed!');
    console.log(user);
});

//user.set({age: 22, name:'Novo Nome'});
user.fetch();


user.set({name: 'newer name'});
user.save();




