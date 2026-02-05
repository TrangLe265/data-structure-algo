class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;

        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];

        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    }

    delete(index) {
        const item = this.data[index];

        this.shiftItems(index);

        return item;
    }

    shiftItems(index) {
        /* Explaination:
        1. write a loop that starts from the 'index' that holds the value needed to be deleted
        2. reassign the value at the current index so that it is equal to the one behind it //meaning each value is shifted one spot to the left
        3. after the first loop at i = 'index', the value we want to delete is already gone, since we reassign that 'index' spot to the value to the left
        4. continue the loop until all values are shifted
        */
        for (let i = index; i < this.length - 1; i++) {
            
            this.data[i] = this.data[i + 1]; 
        }

        // as a result of the above loop, the two last values of the array hold the same value, therefore we need to delete the one in the end of the value
        delete this.data[this.length - 1]; //delete is a built in operator of js, NOT the method we just declared
        this.length--;
    }
}

const newArray = new MyArray();

newArray.push("hi");
newArray.push("you");
newArray.push("!");

newArray.pop();

newArray.delete(1);

console.log(newArray);
