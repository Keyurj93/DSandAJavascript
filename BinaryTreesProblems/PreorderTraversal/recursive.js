var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;


var bintree = new BinaryTree();
var tree = bintree.createTestTree();
// time and space complexity; O(n)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
   */
function preorderRecursive(root){
    if(root!==null){
        console.log('Data ',root.data);
        preorderRecursive(root.leftChild);
        preorderRecursive(root.rightChild);
    }
}
preorderRecursive(tree.root);
 