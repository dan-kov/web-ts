import { Model } from "../models/Model";
import { User, UserProps } from "../models/User";
import { View } from "./View";


export class UserForm extends View<User, UserProps>{
    
    eventsMap(): {[key : string]: () => void }{
        return {
            'click:#btn-set-age': this.onSetAgeClick,
            'click:#btn-set-name': this.onSetNameClick
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();        
    }

    onSetNameClick = (): void => {
        if(this.parent){
            const input = this.parent.querySelector('input');
            if(input){
                const name = input?.value;
                this.model.set({name});
            }            
        }
    }

    template(): string{
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>Age: ${this.model.get('age')}</div>
                <input  />
                <button id='btn-set-name'>Change Name</button>
                <button id='btn-set-age'>Set Random Age</button>
            </div>
        `;
    }
}