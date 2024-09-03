import Analyzer from "./core/Analayzer";
import Lexer from "./core/Lexer";
import Parser from "./core/Parser";




function main(){
    try {
        const lexer = new Lexer('***+**');
        let Token_Arry = lexer.create_token_list();
        const parser = new Parser(Token_Arry)
        let Tokens = parser.run_code();
        const anylazer = new Analyzer(Tokens)
        anylazer.__run_code__();
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

if(!main()){
    console.log('сборка завершена код выхода - 1< со сбоем -10090');
}
else{
    console.log('сборка завершена код выхода - 0< со сбоем 0');
}