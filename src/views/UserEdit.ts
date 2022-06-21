import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";
import { UserShow } from "./UserShow";
import { View } from "./View";


export class UserEdit extends View<User,UserProps>{
    
    regionsMap(): { [key: string]: string; } {
        return {
            // userList: '.user-list',
            userShow: '.user-show',
            userForm: '.user-form'
        };
    }

    onRender(): void {
        // const userCollection = User.buildUserCollection();
        // userCollection.fetch();
        // // new UserList(this.regions.userList, userCollection);
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();
    }
    
    template(): string {
        return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `;
    }

}