var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();

// time and space complexity; O(n)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
*/
function findMaxRecursive(root){
    // find max element of left subtree, find max element of right subtree, compare that max value with root data
    let maxValue = Number.MIN_SAFE_INTEGER;
    if(root!==null){
        console.log("root ",root.data);
        let leftMax = findMaxRecursive(root.leftChild);
        let rightMax = findMaxRecursive(root.rightChild);
        if(leftMax>rightMax)
        maxValue = leftMax;
        else maxValue = rightMax;
        if(maxValue<root.data)
        maxValue = root.data;
    }
    return maxValue;
    
}
let x = findMaxRecursive(tree.root);
console.log(x);