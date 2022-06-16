import axios, { AxiosResponse } from 'axios';

interface UserProps{
    id?: number;
    name?: string;
    age?: number;
}

//definição de um tipo para a função de callback, que não recebe argumentos e não retorna valores
type Callback = () => void;

export class User{
    events: {[key: string]: Callback[]} = {}

    constructor(private data: UserProps){}

    get(propName: string): (string|number){
        return this.data[propName];
    }

    set(update: UserProps): void{
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void{
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void{
        const handlers = this.events[eventName];

        if(!handlers || handlers.length === 0){
            return;
        }

        handlers.forEach(callback => {
            callback();
        });
    }

    fetch():void{
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then( (response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void{
        const id =  this.data.id;
        if ( id ){
            //put
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        }
        else{
            axios.post(`http://localhost:3000/users`, this.data);
        }
        
    }



}