import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import {Eventing} from './Eventing'
import { Model } from "./Model";



export interface UserProps{
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';
/*
.then( (response: AxiosResponse): void => {
    this.set(response.data);
})
*/

export class User extends Model<UserProps>{
    
    // constructor(attrs: UserProps){
    //     super(

    //     );        
    // }
  
    static buildUser(attrs: UserProps): User{
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }    

}