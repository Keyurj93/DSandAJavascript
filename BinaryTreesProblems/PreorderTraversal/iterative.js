var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();
// time and space complexity; O(n)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
   */
function preorderIterative(root){
    let stack = [];
    let finalArray = [];
    stack.push(root);
    while(stack.length){
     let node = stack.pop();
     finalArray.push(node.data);
     if(node.rightChild){
         stack.push(node.rightChild);
     }
     if(node.leftChild){
         stack.push(node.leftChild);
     }
    }
    console.log(finalArray);
}
preorderIterative(tree.root);