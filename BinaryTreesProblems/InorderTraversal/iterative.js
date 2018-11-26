var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();

// time and space complexity; O(n)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
*/
function iterativeInorderTraversal(root){
    let finalArray = [];
    let stack = [];
    let currentNode = root;
    let done = false;
    while(!done){
        // if root element present, push to stack and go to left child
        if(currentNode){
            stack.push(currentNode);
            currentNode = currentNode.leftChild;
        }else{
            // pop root, go to right child
            if(stack.length){
                currentNode =stack.pop();
                finalArray.push(currentNode.data);
                currentNode = currentNode.rightChild;
            }
            else{
                done=true;
            } 
        }
    }
    console.log(finalArray);
}
iterativeInorderTraversal(tree.root);