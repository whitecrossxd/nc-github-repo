class List {

    constructor() {

        this.arr = arguments;
        this.obj = {next: null};
        this.listItems = [];

        for (let j = 0; j < this.arr.length; j++) {
            this.listItems.push(this.arr[j]);
        }
        for(let i = this.listItems.length; i > 0; --i){
            this.obj.value = this.listItems[i-1];
            this.obj = {next: this.obj};
        }
        this.obj = this.obj.next;
    }
  
    sayHiToObj() {
        console.log("show start list");
        console.log(this.obj);
    }
    forEach() {
        console.log("show all list");
        console.log(this.listItems);
    }
    each(num){
        console.log("show specific item from list");
        console.log(this.listItems[num-1])
    }
    push(){
        console.log("set item in end of list");
        let newItems = arguments,
            newObj = {next: null};
        for (let j = 0; j < newItems.length; j++) {
            this.listItems.push(newItems[j]);
        }
        for(let i = this.listItems.length; i > 0; --i){
            newObj.value = this.listItems[i-1];
            newObj = {next: newObj};
        }
        newObj = newObj.next;
        this.obj = newObj;
        console.log(this.listItems);
        console.log(this.obj);
    }
    pop(){
        console.log("remove last element from list");
        let newObj = {next: null};
        this.listItems.pop();
        for(let i = this.listItems.length; i > 0; --i){
            newObj.value = this.listItems[i-1];
            newObj = {next: newObj};
        }
        newObj = newObj.next;
        this.obj = newObj;
        console.log(this.listItems);
        console.log(this.obj);
    }
    set(pos, value){
        console.log("set item in specific position");
        let newObj = {next: null};
        this.listItems.splice(pos-1, 0, value);
        for(let i = this.listItems.length; i > 0; --i){
            newObj.value = this.listItems[i-1];
            newObj = {next: newObj};
        }
        newObj = newObj.next;
        this.obj = newObj;
        console.log(this.listItems);
        console.log(this.obj);
    }
    unshift(){
        console.log("set item at the begining of list");
        let newItems = arguments,
            newObj = {next: null};
        for (let j = 0; j < newItems.length; j++) {
            this.listItems.unshift(newItems[j]);
        }
        for(let i = this.listItems.length; i > 0; --i){
            newObj.value = this.listItems[i-1];
            newObj = {next: newObj};
        }
        newObj = newObj.next;
        this.obj = newObj;
        console.log(this.listItems);
        console.log(this.obj);
    }
    shift(){
        console.log("remove first element from list");
        let newObj = {next: null};
        this.listItems.shift();
        for(let i = this.listItems.length; i > 0; --i){
            newObj.value = this.listItems[i-1];
            newObj = {next: newObj};
        }
        newObj = newObj.next;
        this.obj = newObj;
        console.log(this.listItems);
        console.log(this.obj);
    }
    contains(value){
        console.log("check if list contain item");
        let flag = false;
        for (let i = 0; i < this.listItems.length; i++) {
            if(this.listItems[i] == value){
                flag = true;
            }
        }
        console.log(flag);
    }
    toString(){
        console.log("returns string representation of a list");
        let listString = this.listItems.toString();
        console.log(listString);
    }
    reverse(){
        console.log("returns reverse list");
        let reverseArr = [],
            newObj = {next: null};
        reverseArr = this.listItems.reverse();
        for(let i = reverseArr.length; i > 0; --i){
            newObj.value = reverseArr[i-1];
            newObj = {next: newObj};
        }
        newObj = newObj.next;
        this.obj = newObj;
        console.log(reverseArr);
        console.log(this.obj);
    }
  
  } 
  
let userList = new List("Вася", 11, 333, 666, "asd");
userList.sayHiToObj(); // console.log object with LinkedList
userList.forEach(); // console.log all list
userList.each(2); // special element console.log
userList.push(999, "lalala"); //push
userList.pop(); // pop
userList.set(2, "Vanya");
userList.unshift(13, "satan");
userList.shift();
userList.contains(666);
userList.toString();
userList.reverse();