class  Animal {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}



let simba = new Animal('Simba', 'Sheperd');



