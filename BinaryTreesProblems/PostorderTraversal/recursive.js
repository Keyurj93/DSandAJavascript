var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();
// time and space complexity; O(n)
  /**
   * @param {BinaryTreeNode} root - Root node of binary tree 
   */
function recursivePostorderTraversal(root){
    if(root){
        recursivePostorderTraversal(root.leftChild);
        recursivePostorderTraversal(root.rightChild);
        console.log(root.data);
    }
}
recursivePostorderTraversal(tree.root)