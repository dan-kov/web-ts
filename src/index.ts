import { User } from "./models/User";



const user = new User({
    name: 'MyName',
    age: 22
});

user.on('change', ()=>{
      console.log('Change #1');
      
});
user.on('change', ()=>{
    console.log('Change #2');
    
      
});
user.on('teste', ()=>{
    console.log('teste event');
    
});


user.trigger('change');
user.trigger('teste');
user.trigger('undef');


