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
var counter = 0;
LinkedList.prototype.findKthElementRecursive = function(head,number){
if(head!==null){
    ll.findKthElementRecursive(head.next,number);
    counter++;
    if(counter===number){
        console.log(head.data);
        return head;
    }
}
}
ll.findKthElementRecursive(ll.head,3);
