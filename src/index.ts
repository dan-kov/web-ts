import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection('http://localhost:3000/users', (json:UserProps) => {
    return User.buildUser(json);
})

users.on('change', ()=>{
    const root = document.getElementById('root');
    if(root){
        new UserList(root, users).render();
    }
})
users.fetch();

// import { Collection } from "./models/Collection";
// import { User, UserProps } from "./models/User";
// import { UserEdit } from "./views/UserEdit";
// import { UserList } from "./views/UserList";


// const root = document.getElementById('root');
// if(root){

//     // const userCollection = new Collection<User, UserProps>(
//     //     'http://localhost:3000/users',
//     //     User.buildUser
//     // );
    
//     const users = User.buildUserCollection();
//     users.fetch();
//     console.log('tam inicial: ', users.models.length);
    
//     users.on('change', ()=>{
//         new UserList(root, users).render();
//     });

//     users.fetch();
//     console.log(`tam fetch: ${users.models.length}`);

//     // console.log('userCollection', userCollection);
//     // console.log('userCollection elements:', userCollection.models.length);

//     // const userList = new UserList(root, userCollection);
//     // userList.render();

// //     const user = User.buildUser({name: "NAME", age: 20});
// //     const userEdit = new UserEdit(root, user);
// //     userEdit.render();
// //     console.log(userEdit);
    

// //     //const userForm = new UserForm(root, user);
// //     //userForm.render();
// } else{
//     throw new Error('Root element not found');
// }


















