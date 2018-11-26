var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();

// time and space complexity; O(n)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
*/
function findMaxElementIterative(root){
    // implement level order traversal and while each pop, compare popped element with max element
    let queue = [];
    queue.push(root);
    let maxElement = Number.MIN_SAFE_INTEGER;
    while(queue.length){
        let removedElement = queue.pop();

        if(removedElement.data > maxElement)
        maxElement = removedElement.data;

        if(removedElement.leftChild)
        queue.push(removedElement.leftChild);

        if(removedElement.rightChild)
        queue.push(removedElement.rightChild);

    }
    console.log(maxElement);
}
findMaxElementIterative(tree.root);
