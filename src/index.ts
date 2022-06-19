import { User } from "./models/User";
import { UserForm } from "./views/UserForm";
const element = document.getElementById('root');
const root = document.getElementById('root');
if(root){
    const user = User.buildUser({name: "NAME", age: 20});
    const userForm = new UserForm(root, user);
    userForm.render();
} else{
    throw new Error('Root element not found');
}


















