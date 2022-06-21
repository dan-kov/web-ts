import { Collection } from "../models/Collection";
import { Model } from "../models/Model";


export abstract class CollectionView<T, K> {

    constructor(
        public parent: Element, 
        public collection: Collection<T,K>
    ){        
    }

    abstract renderItem(model: T, itemParent: Element): void;

    render(): void{
        console.log('render CollectionView', this.collection);
        console.log('render CollectionView Models', this.collection.models);
        console.log(`render CollectionView - ${this.collection.models.length} elementos`);
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        for(let model of this.collection.models){
        //this.collection.models.forEach(model => {
            console.log('Processando user ', model);
            
            const itemParent = document.createElement('div');
            this.renderItem(model, itemParent);
            
            templateElement.content.append(itemParent);
        }

        this.parent.append(templateElement.content);
    }

}