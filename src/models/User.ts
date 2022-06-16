import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps{
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:1234/users';
/*
.then( (response: AxiosResponse): void => {
    this.set(response.data);
})
*/

export class User{
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  
}