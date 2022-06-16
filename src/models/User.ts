

interface UserProps{
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

}