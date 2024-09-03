import { Token } from "./Token";
import { TokenType } from "./TokenType";


class Parser{

   public TokensArry:Token[];
   private counter = 0;
   private counter_Arry:any[] = []

   constructor(TokenArry){
    this.TokensArry = TokenArry;
   }

   run_code(){
    for (let index = 0; index < this.TokensArry.length; index++) {
        if (this.TokensArry[index].Type === TokenType.MAIN_SYMBOLL){
            this.counter++;
        }

        if (this.TokensArry[index].Type === TokenType.RPAR){
            while(this.TokensArry[index].Type === TokenType.LPAR){
                index--;
                this.counter ++
            }
        }

        if (this.TokensArry[index].Type === TokenType.PLUS) {
            this.counter_Arry.push(this.counter);
            this.counter = 0;
            this.counter_Arry.push('+')
        }

        if (this.TokensArry[index].Type == TokenType.MINUS){
            this.counter_Arry.push(this.counter);
            this.counter = 0;
            this.counter_Arry.push('-');
        }
    }
    return this.TokensArry
   }
}

export default Parser