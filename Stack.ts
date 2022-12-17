import StackInterface from "./StackInterface";

class Stack<T> implements StackInterface<T>{
    container: T[] = [];
    size: number;

    constructor(size: number) {
        this.size = size;
    }

    getSize(): number {
        return this.container.length;
    }

    isEmpty(): boolean {
        return this.getSize() === 0;
    }

    isFull(): boolean {
        return this.getSize() ===  this.size;
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.container.pop();
    }

    push(item: T): void {
        if (this.isFull()) {
            throw new Error('Stack is full');
        }
        this.container.push(item);
    }

}

export default Stack;