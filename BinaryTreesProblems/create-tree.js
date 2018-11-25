var BinaryTreeNode = require('../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../DataStructures/binary-tree').BinaryTree;

var binTreeNodeHead = new BinaryTreeNode(1);
var binTreeNode2 = new BinaryTreeNode(2);
var binTreeNode3 = new BinaryTreeNode(3);
var binTreeNode4 = new BinaryTreeNode(4);
var binTreeNode5 = new BinaryTreeNode(5);
var binTreeNode6 = new BinaryTreeNode(6);
var binTreeNode7 = new BinaryTreeNode(7);

binTreeNodeHead.leftChild = binTreeNode2;
binTreeNodeHead.rightChild = binTreeNode3;
binTreeNode2.leftChild = binTreeNode4;
binTreeNode2.rightChild =binTreeNode5;
binTreeNode3.leftChild =binTreeNode6;
binTreeNode3.rightChild = binTreeNode7;

var bintree =new BinaryTree(binTreeNodeHead);
console.log("Head ",binTreeNodeHead);
console.log("Node 2 ",binTreeNode2);
console.log("Node 3 ",binTreeNode3);
console.log("Node 4 ",binTreeNode4);
console.log("Node 5 ",binTreeNode5);
console.log("Node 6 ",binTreeNode6);
console.log("Node 7 ",binTreeNode7);
