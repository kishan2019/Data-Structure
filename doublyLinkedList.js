class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    traverse(){
        let current = this.head;
        while(current){
         console.log(current.val);
         current = current.next;
         }
    }
    
    push(val){
        var newNode = new Node(val);
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.length) return undefined;
        var popNode = this.tail;
        
        if(this.length === 1){
           this.head = null,
           this.tail = null
        } else {
           this.tail = popNode.prev;
           this.tail.next = null;
           popNode.prev = null;
        }
        this.length--;
        return popNode;
    }

    shift(){
        if(!this.length) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
           this.head = null,
           this.tail = null  
        } else {
            this.head = oldHead.next;
            oldHead.prev = null;
            oldHead.next = null;
          }
       
         this.length--;
        return oldHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
          if(index < this.length/2){
            count = 0;
            current = this.head;
             while(count !== index){
                current = current.next;
                count++;
               }
            } else {
               count = this.length - 1;
               current = this.tail;
                while(count !== index){
                 current = current.next;
                  count++;
              }
            }
        return current;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

let dll = new DoublyLinkedList();
