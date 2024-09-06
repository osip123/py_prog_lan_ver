import {TokenTypes} from "./TokenTypes";


class Token{

    public Type:TokenTypes;
    public Buffer:string;
    public Name:string;

    constructor(Type: TokenTypes, Buffer:string, Name:string) {
        this.Buffer = Buffer;
        this.Name = Name;
        this.Type = Type;
    }

    public __print():void{
        console.log(this.Buffer)
    }
    //
    // public clear():void{
    //     this.Buffer = null;
    //     this.Type = null;
    //     this.Name = null;
    // }

}

export default Token