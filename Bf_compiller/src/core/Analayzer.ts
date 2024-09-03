import MinusNode from '../Nodes/MinusNode';
import PlusNode from '../Nodes/PlusNode';


class Analyzer{
    public push_array:any[];

    constructor(push_arry:any[]){
        this.push_array = push_arry;
    }

    __run_code__():void{
        for (let index = 0; index < this.push_array.length; index++) {
            if (this.push_array[index] === '-' || this.push_array[index] === '+') {
                if(this.push_array[index] === '-'){
                    const minNode = new MinusNode(+this.push_array[index - 1], +this.push_array[index + 1]);
                    console.log(minNode.calc())
                }

                if(this.push_array[index] === '+'){
                    const pluNode = new PlusNode(+this.push_array[index - 1], +this.push_array[index + 1]);
                    console.log(pluNode.calc());
                }
            }
        }
    }
}

export default Analyzer