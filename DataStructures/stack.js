export class Stack{
    constructor(){
        this.items=[];
    }
    constructor(length){
        this.items= new Array(length);
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        if(this.items.length===0) return "Underflow";
        else  return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}