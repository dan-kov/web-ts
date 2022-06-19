import { Model } from "../models/Model";
import { User } from "../models/User";


export class UserForm{
    
    constructor(
        public parent: HTMLElement | null, 
        public model: User
    ) {}

    eventsMap(): {[key : string]: () => void }{
        return {
            'click:#btn-set-age': this.onSetAgeClick
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();        
    }

    template(): string{
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>Age: ${this.model.get('age')}</div>
                <input />
                <button>Click</button>
                <button id='btn-set-age'>Set Random Age</button>
            </div>
        `;
    }

    bindEvents(fragment: DocumentFragment): void{
        const eventsMap = this.eventsMap();

        for(let eventKey in eventsMap){
            const [eventName, selector] = eventKey.split(':');
        
            fragment.querySelectorAll(selector).forEach(element => { 
                element.addEventListener(eventName, eventsMap[eventKey]);
            })
        }


    }

    render(): void{
        if(this.parent){
            const templateElement = document.createElement('template');
            templateElement.innerHTML = this.template();

            this.bindEvents(templateElement.content);

            this.parent.append(templateElement.content);
        }
    }

    


}