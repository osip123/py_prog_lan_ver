import Token from "../Token";
import {TokenTypes} from "../TokenTypes";

class Lexer{

    public lexeme:string[];
    public Tokens_List:Token[] = [];

    constructor(lexema:string[]) {
        this.lexeme = lexema;
    }


    create_token_list():Token[]{

        for (let i = 0; i < this.lexeme.length; i++) {
            if(this.lexeme[i] == 'нц'){
                let new_token = new Token(TokenTypes.START, '*', 'start')
                this.Tokens_List.push(new_token)
                // new_token.clear();

            }
            if (this.lexeme[i] == 'пока'){
                let new_token = new Token(TokenTypes.WHILE, '*', 'while')
                this.Tokens_List.push(new_token)
                // new_token.clear();
            }
            if (this.lexeme[i] == 'кц'){
                let new_token = new Token(TokenTypes.END, '*', 'end')
                this.Tokens_List.push(new_token)
                // new_token.clear();
            }
            if (this.lexeme[i] == '='){
                let new_token = new Token(TokenTypes.EQ, '*', '=')
                this.Tokens_List.push(new_token)
                // new_token.clear();
            }
            if (this.lexeme[i] == '-'){
                let new_token = new Token(TokenTypes.MINUS, '*', '-')
                this.Tokens_List.push(new_token)
            }
            if (this.lexeme[i] == '+'){
                let new_token = new Token(TokenTypes.PLUS, '*', '+')
                this.Tokens_List.push(new_token)
            }
            if (this.lexeme[i] < '9' && this.lexeme[i] > '0'){
                let new_token = new Token(TokenTypes.INT, this.lexeme[i], 'var')
                this.Tokens_List.push(new_token)
            }
        }

        return this.Tokens_List;
    }
}

export  default  Lexer