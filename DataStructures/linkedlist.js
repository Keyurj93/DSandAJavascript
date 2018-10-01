 class ListNode {
    constructor(element) {
        this.data = element;
        this.next = null;
    }
}
 class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        if (this.head == null) {
            // console.log("in first");
            let ln = new ListNode(data);
            ln.data = data;
            ln.next = null;
            this.head = ln;
            // console.log("Head ",this.head.data);
        }
        else {
            let current = this.head;
            // console.log("in second");
            while (current.next !== null) {
                current = current.next;
            }
            let lN = new ListNode(data);
            lN.data = data;
            lN.next = null;
            current.next = lN;
        }
    }
    print() {
        let current = this.head;
        while (current !== null) {
            console.log("Data ", current.data);
            current = current.next;
        }
    }
  
}
module.exports = {LinkedList};