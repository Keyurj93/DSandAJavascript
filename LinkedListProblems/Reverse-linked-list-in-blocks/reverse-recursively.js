var LinkedList = require('../../DataStructures/linkedlist').LinkedList;

var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

var tempHead = ll.head;
function reverseRecursively(head){
    let temp;
    if(head==null || head.next==null){
        return;
    }
    temp = head.next;
    head.next = temp.next;
    temp.next =  head;
    head = temp;
    head.next = reverseRecursively(head.next);
}
reverseRecursively(tempHead);
ll.print();