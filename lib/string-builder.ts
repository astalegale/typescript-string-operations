import { String } from './String';


export class StringBuilder {
    public Values: string[] = [];

    constructor(value: string = String.Empty) {
        this.Values = new Array(value);
    }
    public ToString() {
        return this.Values.join('');
    }
    public Append(value: string) {
        this.Values.push(value);
    }
    public AppendFormat(value: string, ...args: string[]) {
        this.Values.push(String.Format(value, ...args));
    }
    public Clear() {
        this.Values = [];
    }
}

