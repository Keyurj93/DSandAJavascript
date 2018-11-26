// create a node with data,left and right childs
class BinaryTreeNode{
    constructor(data=null,leftChild=null,rightChild=null){
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.data = data;
    }
}
// create a binary tree from given root node
class BinaryTree{
    constructor(root=null){
        this.root = root;
    }
    // returns a standard created tree
    createTestTree()
    {
    let binTreeNodeHead = new BinaryTreeNode(1);
    let binTreeNode2 = new BinaryTreeNode(2);
    let binTreeNode3 = new BinaryTreeNode(3);
    let binTreeNode4 = new BinaryTreeNode(4);
    let binTreeNode5 = new BinaryTreeNode(5);
    let binTreeNode6 = new BinaryTreeNode(6);
    let binTreeNode7 = new BinaryTreeNode(7);
    binTreeNodeHead.leftChild = binTreeNode2;
    binTreeNodeHead.rightChild = binTreeNode3;
    binTreeNode2.leftChild = binTreeNode4;
    binTreeNode2.rightChild =binTreeNode5;
    binTreeNode3.leftChild =binTreeNode6;
    binTreeNode3.rightChild = binTreeNode7;  
    let bintree =new BinaryTree(binTreeNodeHead);
    return bintree;
}
}
module.exports = {
    BinaryTreeNode,
    BinaryTree
}