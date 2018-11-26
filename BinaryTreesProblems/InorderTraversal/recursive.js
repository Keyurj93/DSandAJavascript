var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();

// time and space complexity; O(n)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
   */
function recursiveinorderTraversal(root){
    if(root){
        recursiveinorderTraversal(root.leftChild);
        console.log('Data ',root.data);
        recursiveinorderTraversal(root.rightChild);
    }
}
recursiveinorderTraversal(tree.root);