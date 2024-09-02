import { Token } from "./Token";
import { TokenType } from "./TokenType";


export class Lexer{

    public Code:string
    public TokenList:Token[] = []
    private Token_current:Token | null;

    constructor(code){
        this.Code = code;
    }


    create_token_list(){
        for (let index = 0; index < this.Code.length; index++) {
            if (this.Code[index] === '*'){
                this.Token_current = new Token(TokenType.MAIN_SYMBOLL, '*')
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }
            if (this.Code[index] === '['){
                this.Token_current = new Token(TokenType.LPAR, '[');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }

            if (this.Code[index] === ']') {
                this.Token_current = new Token(TokenType.RPAR, ']');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }

            if (this.Code[index] === '+') {
                this.Token_current = new Token(TokenType.PLUS, '+');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }

            if (this.Code[index] === '-') {
                this.Token_current = new Token(TokenType.MINUS, '-');
                this.TokenList.push(this.Token_current);
                this.Token_current = null;
            }
        }
    }

}