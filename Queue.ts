class Queue<T> {
    container: T[] = [];
    size: number;

    constructor(size: number) {
        this.size = size;
    }

    enqueue(item: T): void {
        this.container.push(item);
    }

    dequeue(): T {
        return this.container.shift();
    }
}

export default Queue