var LinkedList = require('../../DataStructures/linkedlist').LinkedList;
var ListNode = require('../../DataStructures/linkedlist').ListNode;

var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.add(10);

var node5 = new ListNode(5);

LinkedList.prototype.insertInSortedList = function(node){
    let current = this.head;
    let temp = null;
    while(current!==null && current.data < node.data){
        temp = current;
        current = current.next;
    }
    if(current!==null){
        node.next = current;
        temp.next = node;
    }
}
ll.insertInSortedList(node5);