var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();
// time and space complexity; O(n)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
   */
function postorderTraversalIterative(root) {
    let stack = [];
    let finalArray = [];
    let previous = null;
    stack.push(root);
    while(stack.length){
         let currentNode = stack[stack.length-1];
         //  traverse from top to bottom and if current has left or roght child, push it.
         if(previous==null || previous.leftChild==currentNode || previous.rightChild==currentNode){
            if(currentNode.leftChild)
            stack.push(currentNode.leftChild);
            else if(currentNode.rightChild)
            stack.push(currentNode.rightChild);
         }
        //  when the left child is done processing, push right child for processing  
         else if(currentNode.leftChild==previous){
            if(currentNode.rightChild)
            stack.push(currentNode.rightChild);
         }
        //  when both childs of a node are processed, push root to finalArray and pop it from the stack
         else{
             finalArray.push(currentNode.data);
             stack.pop();
         }
         previous = currentNode;
    }
   console.log(finalArray);
}
postorderTraversalIterative(tree.root);