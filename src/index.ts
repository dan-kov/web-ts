import { User } from "./models/User";


const user = new User({id: 1});
user.set({name: 'new name', age: 90});
user.save();


const new_usr = new User({age:0, name:"baby"});
new_usr.save();
