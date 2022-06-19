import { User } from "./models/User";
import { UserForm } from "./views/UserForm";
const element = document.getElementById('root');
const user = User.buildUser({name: "NAME", age: 20});
const userForm = new UserForm(element, user);
userForm.render();















