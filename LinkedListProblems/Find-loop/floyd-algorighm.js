var LinkedList = require('../../DataStructures/linkedlist').LinkedList;
var ListNode = require('../../DataStructures/linkedlist').ListNode;

var ll = new LinkedList();


LinkedList.prototype.detectLoop = function(){
    let slowPtr = this.head;
    let fastPtr = this.head;
    while(fastPtr!==null && fastPtr.next!==null){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if(slowPtr==fastPtr){
            // loop exists
            slowPtr = this.head;
            while(slowPtr!==fastPtr){
                slowPtr =slowPtr.next;
                fastPtr = fastPtr.next;
            }
            console.log("Start of loop ",fastPtr.data);
            return;
        }
    }
    return false;
}   
   LinkedList.prototype.connect = function(node){
        this.head = node;
    }

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);
var node6 = new ListNode(6);
var node7 = new ListNode(7);
var node8 = new ListNode(8);
var node9 = new ListNode(9);
var node10 = new ListNode(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
node10.next = node6;
ll.connect(node1);
ll.detectLoop();
