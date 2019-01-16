var BinaryTreeNode = require('../../DataStructures/binary-tree').BinaryTreeNode;
var BinaryTree = require('../../DataStructures/binary-tree').BinaryTree;

var bintree = new BinaryTree();
var tree = bintree.createTestTree();

// time complexity: O(n)
// space complexity: O(1)
/**
   * @param {BinaryTreeNode} root - Root node of binary tree 
*/
function morrisTraversal(root) {
    let current=root;
    while(current!==null){
     //    if left child null, process root and move right
        if(current.leftChild==null){
            console.log(current.data);
            current=current.rightChild;
        }
     //    if left child Present, move to inorder predecessor.
     // if predecessor points to current, delete that link 
     // else make right child of inorder predecessor point to current 
        else{
            let pre = current.leftChild;
            while(pre.rightChild!==null && pre.rightChild!==current){
                pre = pre.rightChild;
            }
            if(pre.rightChild==null){
                pre.rightChild=current;
                current=current.leftChild;
            }else{
                pre.rightChild==null;
                console.log(current.data);
                current=current.rightChild;
            }
 
        }
    }
 }
 morrisTraversal(tree.root);