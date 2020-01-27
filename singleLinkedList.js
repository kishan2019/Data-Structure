class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
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
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
     return current;
  }

  shift(){
    if(!this.head) return undefined;
     let currentHead = this.head;
     this.head = currentHead.next;
     this.length--;
     if(this.length === 0){
        this.tail = null;
    }
     return currentHead;
  }

  unshift(val){
     var newNode = new Node(val);
     if(!this.head){
       this.head = newNode;
       this.tail = this.head;
     } else{
        newNode.next = this.head;
        this.head = newNode;
     }
     this.length++;
     return this;
  }

  getAt(index){
  if(index < 0 || index >= this.length) return null;
  let current = this.head;
  let counter = 0;
  while(counter !== index){
    counter++;
    current = current.next;
   }
   return current;
  }

  setAt(index, val){
    let foundNode = this.getAt(index);
    if(foundNode){
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    
   var newNode = new Node(val);
   var prev = this.getAt(index - 1);
   var temp = prev.next;
   prev.next = newNode;
   newNode.next = temp;
    this.length++;
    return true;
  }
}


var list = new singlyLinkedList();
list.push(1);
list.push(2);
list.push(3);

