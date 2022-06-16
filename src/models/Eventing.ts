
//definição de um tipo para a função de callback, que não recebe argumentos e não retorna valores
type Callback = () => void;

export class Eventing{
    events: {[key: string]: Callback[]} = {}

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