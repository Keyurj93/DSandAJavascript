var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();

// time and space complexity; O(n)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
*/
function levelOrderTraversal(root){
    // at each node, push right and left children of that node to queue
    // pop elements of queue
    let queue = [];
    queue.push(root);
    while(queue.length){
        // get element
        let removedElement = queue.shift();
        if(removedElement.data){
            // add its left and right children to queue

            if(removedElement.leftChild)
            queue.push(removedElement.leftChild);

            if(removedElement.rightChild)
            queue.push(removedElement.rightChild);
            
            console.log(removedElement.data);
        }
    }
}
levelOrderTraversal(tree.root);