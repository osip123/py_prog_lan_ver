import { TokenType } from "./TokenType";


export class Token{

    public Type:TokenType;
    public Bufffer: string;

    constructor (Type, Buffer){
        this.Bufffer = Buffer;
        this.Type = Type;
    }

    print(){
        console.log(this.Bufffer, this.Type);
    }

}