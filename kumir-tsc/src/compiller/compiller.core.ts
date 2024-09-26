import Token from "../core/Token";
import {TokenTypes} from "../core/TokenTypes";
import Exseption from "../Exseptions/Exseption";
import ExseptionTypes from "../Exseptions/ExseptionTypes";

// const fs = require('fs')


class CompillerCore {

    public Compille_List:Token[];
    public compille_code:string = ' ';

    constructor(list_compille:Token[]) {
        this.Compille_List = list_compille;
    }

    __run_compille(){
        for (let i = 0; i < this.Compille_List.length; i++) {
            if (this.Compille_List[i].Type === TokenTypes.START){

            }
            if(this.Compille_List[i].Type === TokenTypes.INT){
                this.compille_code = this.compille_code.concat(`
                    ${this.Compille_List[i].Buffer}
                `)
            }
            if (this.Compille_List[i].Type === TokenTypes.FLOAT){
                this.compille_code = this.compille_code.concat( `
                    ${this.Compille_List[i].Buffer}
                `)
            }
            if (this.Compille_List[i].Type === TokenTypes.VAR){
                this.compille_code = this.compille_code.concat(
                    `${this.Compille_List[i].Buffer}`
                )
            }
            if (this.Compille_List[i].Type === TokenTypes.EQ){
                this.compille_code = this.compille_code[i].concat('=')
            }
            if (this.Compille_List[i].Type === TokenTypes.WHILE){
                this.compille_code = this.compille_code.concat('while')
            }

            if (this.Compille_List[i].Type === TokenTypes.LPAR){
                this.compille_code = this.compille_code.concat('(')
                if(this.Compille_List[i + 1].Type != TokenTypes.INT
                || this.Compille_List[i + 1].Type != TokenTypes.FLOAT){
                    const error = new Exseption(ExseptionTypes.Varr);
                    error.__print_exrption();
                }
            }

            if (this.Compille_List[i].Type === TokenTypes.LPAR){
                this.compille_code = this.compille_code.concat('(')
            }

            if (this.Compille_List[i].Type === TokenTypes.RPAR){
                this.compille_code = this.compille_code.concat(')')
            }
        }

        console.log(this.compille_code)

    }

    __run_code(){
        let output = this.__run_compille();
        return output
    }


}

export default CompillerCore