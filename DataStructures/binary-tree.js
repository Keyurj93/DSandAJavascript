class BinaryTreeNode{
    constructor(data=null,leftChild=null,rightChild=null){
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.data = data;
    }
}
class BinaryTree{
    constructor(head=null){
        this.head = head;
    }
}
module.exports = {
    BinaryTreeNode,
    BinaryTree
}