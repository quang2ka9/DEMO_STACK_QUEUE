interface StackInterface<T> {
    container: T[];
    size: number;

    push(item: T): void;

    pop(): T;

    getSize(): number;

    isFull(): boolean;

    isEmpty(): boolean;
}

export default StackInterface;