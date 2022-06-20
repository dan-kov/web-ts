import { Model } from "../models/Model";
import { User, UserProps } from "../models/User";
import { View } from "./View";


export class UserForm extends View<User, UserProps>{
    
    eventsMap(): {[key : string]: () => void }{
        return {
            'click:#btn-set-age': this.onSetAgeClick,
            'click:#btn-set-name': this.onSetNameClick,
            'click:#btn-save-model': this.onSaveClick
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

    onSaveClick = (): void => {
        this.model.save();
    }

    template(): string{
        return `
            <div>
                <h1>User Form</h1>
                <input placeholder="${this.model.get('name')}" />
                <button id='btn-set-name'>Change Name</button>
                <button id='btn-set-age'>Set Random Age</button>
                <button id='btn-save-model'>Save</button>
            </div>
        `;
    }
}