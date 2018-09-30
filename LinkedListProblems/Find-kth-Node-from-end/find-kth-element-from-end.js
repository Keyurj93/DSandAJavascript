var LinkedList = require('../../DataStructures/linkedlist').LinkedList;

var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.add(10);

LinkedList.prototype.findkthElementFromEnd =  function(number){
    let temp = this.head;
    let count = 0;
    let newNode = this.head;
    

    while(count!==(number-1)){
        newNode = newNode.next;
        count++;
    }
    while(newNode.next!==null){
        temp = temp.next;
        newNode = newNode.next;
    } 
    console.log("Nth element is ",temp.data);
}
ll.findkthElementFromEnd(3);