var LinkedList = require('../../DataStructures/linkedlist').LinkedList;
var ListNode = require('../../DataStructures/linkedlist').ListNode;


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


var node11 = new ListNode(11);
var node12 = new ListNode(12);
var node13 = new ListNode(13);
var node14 = new ListNode(14);
var node15 = new ListNode(15);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;


node11.next = node12;
node12.next = node13;
node13.next = node14;
node14.next = node15;
node15.next = node6;

function print(head) {
    let current = head;
    while (current !== null) {
        console.log("Data ", current.data);
        current = current.next;
    }
}



