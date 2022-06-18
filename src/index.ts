import { User } from "./models/User";


const user = User.buildUser({name:"builded user", id:1});

user.on('change', ()=>{
    console.log('changed!');
    console.log(user);
});

//user.set({age: 22, name:'Novo Nome'});
user.fetch();


user.set({name: 'newer builded name'});
user.save();




