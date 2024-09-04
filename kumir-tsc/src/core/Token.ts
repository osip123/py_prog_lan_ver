import {TokenTypes} from "./TokenTypes";


class Token{

    public Type:TokenTypes | null;
    public Buffer:string | null;
    public Name:string | null;

    constructor(Type: TokenTypes, Buffer:string, Name:string) {
        this.Buffer = Buffer;
        this.Name = Name;
        this.Type = Type;
    }

    public __print():void{
        console.log(this.Buffer)
    }

    public clear():void{
        this.Buffer = null;
        this.Type = null;
        this.Name = null;
    }

}

export default Token