import Stack from "./Stack";
import Queue from "./Queue";

class Hospital<T> extends Queue<T>{
    name:string;
    constructor(name:string,size:number) {
        super(size);
        this.name=name;
    }
}
export default Hospital;